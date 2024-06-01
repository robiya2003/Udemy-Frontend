import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-topic-update',
  templateUrl: './topic-update.component.html',
  styleUrl: './topic-update.component.scss'
})
export class TopicUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  topic:any={
    CategoryId:"",
    Name: "",
    Description:"" ,
    imagefile:null
  }
  setValue: any = {
    CategoryId:"",
    Name: "",
    Description:"" ,
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
  GetByIdTopic(){
    
    this.http.TopicGetById(this.myId).subscribe({
      next: (data) => {
        this.topic = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetTopic(){
    this.http.TopicUpdate(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        // this.category = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
