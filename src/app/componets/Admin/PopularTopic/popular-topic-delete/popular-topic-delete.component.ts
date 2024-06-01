import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-popular-topic-delete',
  templateUrl: './popular-topic-delete.component.html',
  styleUrl: './popular-topic-delete.component.scss'
})
export class PopularTopicDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  populartopic: any 
  constructor(private http : CrudServiceService){}

  PopularTopicGetById(){

    this.http.PopularTopicGetById(this.myId).subscribe({
      next: (data) => {
        this.populartopic = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeletePopularTopicGetById(){
      
      this.http.PopularTopicDelete(this.myId).subscribe({
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
