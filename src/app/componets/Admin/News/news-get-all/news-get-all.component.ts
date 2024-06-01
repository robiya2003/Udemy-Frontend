import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-news-get-all',
  templateUrl: './news-get-all.component.html',
  styleUrl: './news-get-all.component.scss'
})
export class NewsGetAllComponent implements OnInit
{
  lists!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void { this.GetAllElemens()}
  GetAllElemens(){
    this.crudservise.NewsGetAll().subscribe({
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
