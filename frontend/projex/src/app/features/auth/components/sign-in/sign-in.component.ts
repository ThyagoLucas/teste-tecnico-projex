import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authService } from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formulario: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private auth : authService) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  enablesendButton(): boolean{

    if(
      !this.formulario.get('email')?.errors &&
      !this.formulario.get('password')?.errors
      ) return false

    return true

  }

  onSubmit(){
    if(this.formulario.get('email')?.valid && this.formulario.get('password')?.valid ){
      const loginDatas = {
        email: this.formulario.get('email')?.value,
        password: this.formulario.get('password')?.value
      }

      this.auth.signIn(loginDatas).subscribe({
        next: (res)=>{
        localStorage.setItem('token', res.token);
        this.auth.showMessage('Login efetuado com sucesso :)', 'Sucesso!', "sucess");
        this.router.navigate([''])

      }, error:(err)=> console.error(err)})

    }
  }

  goToRegister():void{
    this.router.navigate(['auth/sign-up'])
  }

  ngOnInit(){
    const token = localStorage.getItem('token');

    if(token){
      this.router.navigate([''])
    }
  }


}
