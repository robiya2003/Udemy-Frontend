import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../../services/category-topic-popular-topic.service';
import { HttpClient } from '@angular/common/http';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.scss'
})
export class CategoryCreateComponent {
  selectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    Name: "",
    Description:"" ,
    imagefile:null
  }

  constructor(private fileUploadService:CategoryTopicPopularTopicService,private http: HttpClient,private crudservice:CrudServiceService) {}

  onFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setvalue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.selectedFile = file;
    }
  }
  CreateCategory(data: any) {
    if (!data.imagefile) {
      this.errorMessage = 'Image file is required';
      return;
    }

    this.crudservice.CategoryCreate(data).subscribe({
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
    this.CreateCategory(this.setvalue);
  }
}
