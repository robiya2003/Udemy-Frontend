import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-popular-topic-update',
  templateUrl: './popular-topic-update.component.html',
  styleUrl: './popular-topic-update.component.scss'
})
export class PopularTopicUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  populartopic:any={
    TopicId:"",
    Name: "",
    Description:"" ,
    imagefile:null
  }
  setValue: any = {
    TopicId:"",
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
    
    this.http.PopularTopicGetById(this.myId).subscribe({
      next: (data) => {
        this.populartopic = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetTopic(){
    this.http.PopularTopicUpdate(this.myId, this.setValue).subscribe({
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
