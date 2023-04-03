import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbToastrModule.forRoot({})


  ],
  exports:[
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    ReactiveFormsModule,



  ]
})
export class NebularModulesModule { }
