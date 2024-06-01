import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-popular-topic-get-all',
  templateUrl: './popular-topic-get-all.component.html',
  styleUrl: './popular-topic-get-all.component.scss'
})
export class PopularTopicGetAllComponent implements OnInit
{
  lists!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void { this.GetAllElemens()}
  GetAllElemens(){
    this.crudservise.PopularTopicGetAll().subscribe({
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
