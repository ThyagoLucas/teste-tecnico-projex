import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModulesModule } from '../nebular-modules/nebular-modules.module';
import { LayoutComponent } from './layout.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NebularModulesModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  exports:[ LayoutComponent ]
})
export class LayoutModule { }
