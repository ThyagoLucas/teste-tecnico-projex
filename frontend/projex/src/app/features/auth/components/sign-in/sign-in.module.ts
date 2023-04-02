import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    NebularModulesModule
  ],
  exports:[
    SignInComponent
  ]
})
export class SignInModule { }
