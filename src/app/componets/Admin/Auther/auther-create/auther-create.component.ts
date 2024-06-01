import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-auther-create',
  templateUrl: './auther-create.component.html',
  styleUrl: './auther-create.component.scss'
})
export class AutherCreateComponent {
  selectedFile: File | null = null;
  isSubmitted: boolean = false;
  errorMessage: any;
  setvalue:any={
    FullName:"",
    Exprince: "",
    About:"" ,
    Gmail:"" ,
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
  CreateAuther(data: any) {
    if (!data.imagefile) {
      this.errorMessage = 'Image file is required';
      return;
    }

    this.crudservice.AutherCreate(data).subscribe({
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
