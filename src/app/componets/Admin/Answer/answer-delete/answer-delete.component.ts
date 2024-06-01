import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-answer-delete',
  templateUrl: './answer-delete.component.html',
  styleUrl: './answer-delete.component.scss'
})
export class AnswerDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  Answer: any 
  constructor(private http : CrudServiceService){this.AnswerGetById()}

  AnswerGetById(){

    this.http.AnswerGetById(this.myId).subscribe({
      next: (data) => {
        this.Answer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteAnswerGetById(){
      
      this.http.AnswerDelete(this.myId).subscribe({
        next: (data) => {
          console.log(data);
          this.isDeleted = true;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

}
