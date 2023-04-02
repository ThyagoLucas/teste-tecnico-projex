import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guard/auth.guard';

const routes: Routes = [
	{
		path: '',
    canActivate: [AuthGuard],
		loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
