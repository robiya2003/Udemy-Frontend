import { Component } from '@angular/core';
import { CategoryTopicPopularTopicService } from '../../../../services/category-topic-popular-topic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.scss'
})
export class CategoryCreateComponent {
  selectedFile: File | null = null;

  constructor(private fileUploadService:CategoryTopicPopularTopicService,private http: HttpClient) {}

  onFileSelected(event: any): void {

    const file: File = event.target.files[0];
    console.log(file)
    if (file) {
      
      this.selectedFile = file;
    }
  }

  onUpload() {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('ufile', this.selectedFile, this.selectedFile.name);
      this.http.post("https://localhost:7030/api/AAAAAA/UploadFileAdmin", uploadData)
        .subscribe(response => {
          console.log(response);
        });
    }
  }
}
