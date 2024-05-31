import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.scss'
})
export class CategoryDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  category: any = {
    Name: "",
    Description:"" ,
    categoryPhotoPath:""
  };
  constructor(private http : CrudServiceService){this.CategoryGetById()}

  CategoryGetById(){

    this.http.CategoryGetById(this.myId).subscribe({
      next: (data) => {
        this.category = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteCategoryGetById(){
      
      this.http.CategoryDelete(this.myId).subscribe({
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
