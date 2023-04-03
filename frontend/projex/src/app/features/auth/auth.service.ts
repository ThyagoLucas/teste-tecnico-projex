import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUp } from './components/sign-up/models/sign-up.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor(private http:HttpClient) { }



  sendRegister(userDatas:SignUp){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };

    return this.http.post(`${environment.API}/sign-up`, userDatas, httpOptions );
  }
}
