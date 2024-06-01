import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-answer-update',
  templateUrl: './answer-update.component.html',
  styleUrl: './answer-update.component.scss'
})
export class AnswerUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  answer:any={
    Id:"",
    CourseId:"",
    Title: "",
    Body:"" ,
    imagefile:null
  }
  setValue: any = {
    Id:"",
    CourseId:"",
    Title: "",
    Body:"" ,
    imagefile:null
  };



  constructor(private http :CrudServiceService){}
  
  GetByIdAnswer(){
    
    this.http.AnswerGetById(this.myId).subscribe({
      next: (data) => {
        this.answer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetAnswer(){
    this.setValue.Id=this.myId
    this.http.AnswerUpdate(this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        this.answer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
