import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-auther-update',
  templateUrl: './auther-update.component.html',
  styleUrl: './auther-update.component.scss'
})
export class AutherUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  auther:any={
    FullName:"",
    Exprince: "",
    About:"" ,
    Gmail:"" ,
    imagefile:null
  }
  setvalue: any = {
    FullName:"",
    Exprince: "",
    About:"" ,
    Gmail:"" ,
    imagefile:null
  };
  selectedFile: File | null = null;


  constructor(private http :CrudServiceService){}
  onFileSelected(event: any): void {

    const file: File = event.target.files[0];
    this.setvalue.imagefile = file;
    console.log(file)
    if (file) {
      
      this.selectedFile = file;
    }
  }
  GetByIdAuther(){
    
    this.http.AutherGetById(this.myId).subscribe({
      next: (data) => {
        this.auther = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetAuther(){
    this.http.AutherUpdate(this.myId, this.setvalue).subscribe({
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
