import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-answer-get-all',
  templateUrl: './answer-get-all.component.html',
  styleUrl: './answer-get-all.component.scss'
})
export class AnswerGetAllComponent implements OnInit
{
  lists!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void { this.GetAllElemens()}
  GetAllElemens(){
    this.crudservise.AnswerGetAll().subscribe({
      next: (data) => {
        this.lists = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
