import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-topic-delete',
  templateUrl: './topic-delete.component.html',
  styleUrl: './topic-delete.component.scss'
})
export class TopicDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  topic: any 
  constructor(private http : CrudServiceService){}

  TopicGetById(){

    this.http.TopicGetById(this.myId).subscribe({
      next: (data) => {
        this.topic = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteTopicGetById(){
      
      this.http.TopicDelete(this.myId).subscribe({
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
