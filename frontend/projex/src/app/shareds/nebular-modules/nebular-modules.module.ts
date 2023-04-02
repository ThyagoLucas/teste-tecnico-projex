import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule

  ],
  exports:[
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    ReactiveFormsModule



  ]
})
export class NebularModulesModule { }
