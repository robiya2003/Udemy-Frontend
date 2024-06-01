import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-auther-get-all',
  templateUrl: './auther-get-all.component.html',
  styleUrl: './auther-get-all.component.scss'
})
export class AutherGetAllComponent implements OnInit
{
  lists!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void { this.GetAllElemens()}
  GetAllElemens(){
    this.crudservise.AutherGetAll().subscribe({
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
