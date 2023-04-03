import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userForm: FormGroup;
  file: File = new File([new Blob()], 'temp.txt');

  constructor( private http: HttpClient, private router: Router, private toastr:NbToastrService) {

    this.userForm = new FormGroup({
      file: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

   }

   onFileSelected(event:any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file',this.file);
    formData.append('name', this.userForm.get('name')?.value);
    formData.append('email', this.userForm.get('email')?.value);
    formData.append('password', this.userForm.get('password')?.value);

    const httpOptions = {
      headers: new HttpHeaders({})
    };

    this.http.post('http://localhost:4000/sign-up', formData, httpOptions).subscribe({
      next: (res)=>{
        this.toastr.success('Usuário cadastrado com sucesso!','Cadastrado!', {
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          duration: 5000,
          destroyByClick: true
        });
      this.router.navigate(['auth/sign-in'])
    },error: (err)=>{
      console.error(err)
    }}


  );

  }

  goToLogin():void{
    this.router.navigate(['auth/sign-in'])
  }

}
