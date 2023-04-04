import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		children:[
      {
        path:'dashboards',
        loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
			{
				path: 'property',
				loadChildren: () => import('../../features/property/property.module').then(m => m.PropertyModule),
			},
      {
				path: 'settings',
				loadChildren: () => import('../../features/user/components/settings/settings.module').then(m => m.SettingsModule)

			},
      {
				path: 'clients',
				loadChildren: () => import('../../features/client/client.module').then(m => m.ClientModule)

			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
