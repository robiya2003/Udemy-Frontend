import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface Token {
 aud:string;
 email:string;
 exp:number;
 iat:number;
 iss:string;
nameid:string;
role:string;
}

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const token = localStorage.getItem('AdminToken');
console.log(token)
  if (token) {
    const decoded: Token = jwtDecode(token);
    const expireDate = new Date(decoded.exp * 1000); // Convert expiration timestamp to Date object
    const currentDate = new Date();
if(decoded.role!="Admin"){
  router.navigate(['/login']);
}
    console.log("kelddddddddddddddddddddddddddddddddddddddddddddddddddi")
  
    if (expireDate > currentDate) {
      // Token is not expired
    
      return true;
    } else {
      // Token is expired, navigate to login page
      router.navigate(['/login']);
      return false;
    }
  } else {
    // Token is null, navigate to login page
    router.navigate(['/login']);
    return false;
  }
};
