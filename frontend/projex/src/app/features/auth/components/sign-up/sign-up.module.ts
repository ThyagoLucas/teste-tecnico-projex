import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';
import { SignUpComponent } from './sign-up.component';



@NgModule({
  declarations: [ SignUpComponent ],
  imports: [
    CommonModule,
    NebularModulesModule,
  ],
  exports:[
    SignUpComponent
  ]
})
export class SignUpModule { }
