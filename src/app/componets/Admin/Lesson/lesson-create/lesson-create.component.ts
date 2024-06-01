import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrl: './lesson-create.component.scss'
})
export class LessonCreateComponent {
  imageselectedFile: File | null = null;
  videoselectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    name:"",
    description: "",
    CourseId:"" ,
    imagefile:null,
    videofile:null
  }
  constructor(private crudservice:CrudServiceService) {}
  
  ImageonFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setvalue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.imageselectedFile = file;
    }
  }
  VideoonFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setvalue.videofile = file;
    console.log(file)
    if (file) {
      
      this.videoselectedFile = file;
    }
  }
  CreateAuther(data: any) {
    if (!data.imagefile) {
      this.errorMessage = 'Image file is required';
      return;
    }

    this.crudservice.LessonCreate(data).subscribe({
      next: (result) => {
        console.log(result);
        this.isSubmitted = true;
        this.errorMessage = '';
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'An error occurred while creating the category';
      }
    });
  }

  setUser() {
    this.CreateAuther(this.setvalue);
  }
}
