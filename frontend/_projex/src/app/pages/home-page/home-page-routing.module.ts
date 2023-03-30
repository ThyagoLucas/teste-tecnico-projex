import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		children:[
			{
				path: 'property',
				loadChildren: () => import('../../features/property/property.module').then(m => m.PropertyModule),
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
