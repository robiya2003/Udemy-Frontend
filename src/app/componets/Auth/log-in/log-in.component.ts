import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  constructor(private router: Router, private authService: AuthService) {}







  login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    // const isDirector: any = jwtDecode(sessionStorage.getItem('isDirector')!);

    if (email && password) {
      
      this.authService.login(email, password).subscribe({
        next: (res) => {
          console.log(res);
          const token: any = jwtDecode(res.token);
          console.log(token);
          if (token.role == 'Admin') //this.router.navigate(['/student-login']);
         {
          alert('Admin')
         }
         
          else if (token.role == 'User')
            //this.router.navigate(['/teacher-login']);
            
          {
            localStorage.setItem('UserToken',res.token)
              console.log("token : "+localStorage.getItem('UserToken'))
            alert('User')
            
          }
          return res;
        },
        error: (err) => {
          console.log(err.error.message);
          
        },
      });
    }
  }
}





