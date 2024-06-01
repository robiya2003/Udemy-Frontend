import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrl: './topic-create.component.scss'
})
export class TopicCreateComponent {
  selectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    CategoryId:"",
    Name: "",
    Description:"" ,
    imagefile:null
  }
  constructor(private crudservice:CrudServiceService) {}
  onFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setvalue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.selectedFile = file;
    }
  }
  CreateTopic(data: any) {
    if (!data.imagefile) {
      this.errorMessage = 'Image file is required';
      return;
    }

    this.crudservice.TopicCreate(data).subscribe({
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
    this.CreateTopic(this.setvalue);
  }
}
