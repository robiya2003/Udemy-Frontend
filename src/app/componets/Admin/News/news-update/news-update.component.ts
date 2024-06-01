import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrl: './news-update.component.scss'
})
export class NewsUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  news:any={
    PopularTopicId:"",
    Title: "",
    About:"" ,
    imagefile:null
  }
  setValue: any = {
    PopularTopicId:"",
    Title: "",
    About:"" ,
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
  GetByIdNews(){   
    this.http.NewsGetById(this.myId).subscribe({
      next: (data) => {
        this.news = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetNews(){
    this.http.NewsUpdate(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        this.news = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
