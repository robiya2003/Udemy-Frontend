import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-topic-get-all',
  templateUrl: './topic-get-all.component.html',
  styleUrl: './topic-get-all.component.scss'
})
export class TopicGetAllComponent implements OnInit{
  lists!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void { this.GetAllElemens()}
  GetAllElemens(){
    this.crudservise.TopicGetAll().subscribe({
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
