import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrl: './news-create.component.scss'
})
export class NewsCreateComponent {
  selectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    PopularTopicId:"",
    Title: "",
    About:"" ,
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
  CreateNews(data: any) {
    if (!data.imagefile) {
      this.errorMessage = 'Image file is required';
      return;
    }

    this.crudservice.NewsCreate(data).subscribe({
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
    this.CreateNews(this.setvalue);
  }
}
