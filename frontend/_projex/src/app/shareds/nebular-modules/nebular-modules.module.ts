import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,

  ],
  exports:[
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,


  ]
})
export class NebularModulesModule { }
