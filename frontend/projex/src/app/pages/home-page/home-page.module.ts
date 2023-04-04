import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NbButtonModule } from '@nebular/theme';
import { HomePageComponent } from './home-page.component';
import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NbButtonModule,
    NebularModulesModule
  ]
})
export class HomePageModule { }
