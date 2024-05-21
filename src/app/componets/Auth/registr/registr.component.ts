import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
// import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.scss'
})
export class RegistrComponent {
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {}
  
  register() {
    const username = (document.getElementById('userName') as HTMLInputElement).value;
    const lastname = (document.getElementById('lastName') as HTMLInputElement).value;
    const firstname = (document.getElementById('firstName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    if (email != "" && password) {
      this.authService.register(email, password, username, lastname, firstname).subscribe({
        next: (res) => {
          console.log(res);
          alert("Registered")
          this.router.navigate(['/login']);
          return res;
        },
        error: (err) => {
          console.log(err.error.message);
          alert(err.error.message)
        },
      });
    }
  }

}
