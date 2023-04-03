import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUp } from './components/sign-up/models/sign-up.model';
import { HttpHeaders } from '@angular/common/http';
import { SignIn } from './components/sign-in/models/sign-in.model';
import { Token } from './models/token.model';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor(private http:HttpClient, private toastr:NbToastrService) { }

  showMessage(message:string, title:string, type:string){

    if(type === 'sucess'){
      return this.toastr.success(`${message}`,`${title}`, {
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
              duration: 5000,
              destroyByClick: true
            });
    }
    if(type === 'danger'){
      return this.toastr.danger(`${message}`,`${title}`, {
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
              duration: 5000,
              destroyByClick: true
            });
    }

    return

  }



  sendRegister(userDatas:SignUp){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };

    return this.http.post(`${environment.API}/sign-up`, userDatas, httpOptions );
  }

  signIn(signInDatas:SignIn){
    return this.http.post<Token>(`${environment.API}/sign-in`, signInDatas);
  }
}
