import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/features/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/features/auth/components/sign-up/sign-up.component';
import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent,
    children:[
      {
        path:'sign-in',
        component: SignInComponent
      },
      {
        path:'sign-up',
        component: SignUpComponent
      }
    ]

	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
