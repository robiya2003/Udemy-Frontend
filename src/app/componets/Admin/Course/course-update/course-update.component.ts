import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrl: './course-update.component.scss'
})
export class CourseUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  course:any={
    name:"",
    description: "",
    AutherId:"" ,
    PopularTopicId:"" ,
    imagefile:null
  }
  setValue: any = {
    name:"",
    description: "",
    AutherId:"" ,
    PopularTopicId:"" ,
    imagefile:null
  };
  selectedFile: File | null = null;


  constructor(private http :CrudServiceService){}
  onFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setValue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.selectedFile = file;
    }
  }
  GetByIdCourse(){
    
    this.http.CourseGetById(this.myId).subscribe({
      next: (data) => {
        this.course = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetCourse(){
    this.http.CourseUpdate(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        this.course = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
