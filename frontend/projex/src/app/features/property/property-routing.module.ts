import { AllPropertiesComponent } from './components/all-properties/all-properties.component';
import { PropertyRentComponent } from './components/property-rent/property-rent.component';
import { PropertySaleComponent } from './components/property-sale/property-sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property.component';

const routes: Routes = [
	{
		path:'',
		component: PropertyComponent,
    children:[

    {
      path:'sale',
      component: PropertySaleComponent
    },
    {
      path:'rent',
      component: PropertyRentComponent
    },
    {
      path:'add-property',
      component:AllPropertiesComponent
    }
    ]
	},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
