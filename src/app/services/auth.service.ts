import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl

  register(email: string, password: string, username: string, lastname: string, firstname: string): Observable<any> {

    var body = {
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "password": password
    }
    
    return this.http
      .post<any>(this.baseUrl + `Registratsiya/CreatePersonForUser`, body)
      .pipe(map((data) => {
        console.log(data)
        return data
      }))
  }


  // Log IN
  login(email: string, password: string): Observable<any> {
    console.log("keli")
    return this.http
      .post<any>(this.baseUrl + `Registratsiya/LogIn`, {
        email: email,
        password: password
      })
      .pipe(map((data) => {
        console.log(data)
        return data
      }))
  }
}

