import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-category-get-all',
  templateUrl: './category-get-all.component.html',
  styleUrl: './category-get-all.component.scss'
})
export class CategoryGetAllComponent implements OnInit{
  categories!:any[]
  constructor(private crudservise:CrudServiceService) {}
  ngOnInit(): void {
    this.GetAllCategories();
  }
  GetAllCategories(){
    this.crudservise.CategoryGetAll().subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
