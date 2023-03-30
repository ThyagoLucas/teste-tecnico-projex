import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,


  ]
})
export class PropertyModule { }
