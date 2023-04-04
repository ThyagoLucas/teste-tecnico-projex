import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NebularModulesModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
