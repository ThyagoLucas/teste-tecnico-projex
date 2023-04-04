import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ SettingsComponent ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports:[
    SettingsComponent
  ]
})
export class SettingsModule { }
