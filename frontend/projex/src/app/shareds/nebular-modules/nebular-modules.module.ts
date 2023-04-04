import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbToastrModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbToastrModule.forRoot({}),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot()

  ],
  exports:[
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbMenuModule,
    NbSidebarModule,
    NbEvaIconsModule




  ]
})
export class NebularModulesModule { }
