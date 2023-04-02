import { LoginPageComponent } from './login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { SignInModule } from 'src/app/features/auth/components/sign-in/sign-in.module';
import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';
import { LayoutModule } from 'src/app/shareds/layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
		SignInModule,
    NebularModulesModule,
    LayoutModule,
    SignInModule,
    FormsModule,

  ]
})
export class LoginPageModule { }
