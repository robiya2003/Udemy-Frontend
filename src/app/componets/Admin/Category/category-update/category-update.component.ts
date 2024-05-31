import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.scss'
})
export class CategoryUpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  category:any={
    Name: "",
    Description:"" ,
    imagefile:null
  }
  setValue: any = {
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
  GetByIdCategory(){
    
    this.http.CategoryGetById(this.myId).subscribe({
      next: (data) => {
        this.category = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  SetCategory(){
    this.http.CategoryUpdate(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.isSubmitted=true;
        this.category = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
