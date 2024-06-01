import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-lesson-update',
  templateUrl: './lesson-update.component.html',
  styleUrl: './lesson-update.component.scss'
})
export class LessonUpdateComponent {
  imageselectedFile: File | null = null;
  videoselectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  myId!: number;
  
  lesson:any={
    name:"",
    description: "",
    CourseId:"" ,
    imagefile:null,
    videofile:null
  }
  setValue: any = {
    name:"",
    description: "",
    CourseId:"" ,
    imagefile:null,
    videofile:null
  };
  selectedFile: File | null = null;


  constructor(private http :CrudServiceService){}
  ImageonFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setValue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.imageselectedFile = file;
    }
  }
  VideoonFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setValue.videofile = file;
    console.log(file)
    if (file) {
      
      this.videoselectedFile = file;
    }
  }



  GetByIdLesson(){
    
    this.http.LessonGetById(this.myId).subscribe({
      next: (data) => {
        this.lesson = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetLesson(){
    this.http.LessonUpdate(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        this.lesson = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
