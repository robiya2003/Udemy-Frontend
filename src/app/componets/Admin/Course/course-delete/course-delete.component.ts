import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrl: './course-delete.component.scss'
})
export class CourseDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  Course: any 
  constructor(private http : CrudServiceService){this.CourseGetById()}

  CourseGetById(){

    this.http.CourseGetById(this.myId).subscribe({
      next: (data) => {
        this.Course = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteCourseGetById(){
      
      this.http.CourseDelete(this.myId).subscribe({
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
