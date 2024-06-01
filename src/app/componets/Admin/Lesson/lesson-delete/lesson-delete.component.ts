import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-lesson-delete',
  templateUrl: './lesson-delete.component.html',
  styleUrl: './lesson-delete.component.scss'
})
export class LessonDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  Lesson: any 
  constructor(private http : CrudServiceService){this.LessonGetById()}

  LessonGetById(){

    this.http.LessonGetById(this.myId).subscribe({
      next: (data) => {
        this.Lesson = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteLessonGetById(){
      
      this.http.LessonDelete(this.myId).subscribe({
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
