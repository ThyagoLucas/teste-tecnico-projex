import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPropertiesComponent } from './components/all-properties/all-properties.component';
import { PropertySaleComponent } from './components/property-sale/property-sale.component';
import { PropertyRentComponent } from './components/property-rent/property-rent.component';



@NgModule({
  declarations: [PropertyComponent, AllPropertiesComponent, PropertySaleComponent, PropertyRentComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
  ], exports:[
    PropertyComponent, AllPropertiesComponent, PropertySaleComponent, PropertyRentComponent
  ]
})
export class PropertyModule { }
