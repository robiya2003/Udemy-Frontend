import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-news-delete',
  templateUrl: './news-delete.component.html',
  styleUrl: './news-delete.component.scss'
})
export class NewsDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  News: any 
  constructor(private http : CrudServiceService){this.NewsGetById()}

  NewsGetById(){

    this.http.NewsGetById(this.myId).subscribe({
      next: (data) => {
        this.News = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteNewsGetById(){
      
      this.http.NewsDelete(this.myId).subscribe({
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
