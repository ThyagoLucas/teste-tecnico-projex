import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  formulario: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
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
    console.log(this.formulario.get('password')?.errors)
  }

  goToRegister():void{
    this.router.navigate(['auth/sign-up'])
  }
}
