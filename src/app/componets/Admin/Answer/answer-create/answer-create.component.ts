import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrl: './answer-create.component.scss'
})
export class AnswerCreateComponent {
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    CourseId:"",
    Title: "",
    Body:"" ,
    imagefile:null
  }
  constructor(private crudservice:CrudServiceService) {}
  
  CreateAnswer(data: any) {
    this.crudservice.AnswerCreate(data).subscribe({
      next: (result) => {
        console.log(result);
        this.isSubmitted = true;
        this.errorMessage = '';
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'An error occurred while creating the category';
      }
    });
  }

  setUser() {
    this.CreateAnswer(this.setvalue);
  }
}
