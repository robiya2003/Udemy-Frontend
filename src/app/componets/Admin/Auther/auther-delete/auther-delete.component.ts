import { Component } from '@angular/core';
import { CrudServiceService } from '../../../../services/CrudServices/crud-service.service';

@Component({
  selector: 'app-auther-delete',
  templateUrl: './auther-delete.component.html',
  styleUrl: './auther-delete.component.scss'
})
export class AutherDeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
auther: any
  constructor(private http : CrudServiceService){}

  AutherGetById(){

    this.http.AutherGetById(this.myId).subscribe({
      next: (data) => {
        this.auther = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    DeleteAutherGetById(){
      
      this.http.AutherDelete(this.myId).subscribe({
        next: (data) => {
          console.log(data);
          this.isDeleted = true;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

}
