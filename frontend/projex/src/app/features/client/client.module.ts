import { ClientComponent } from './client.component';
import { NebularModulesModule } from 'src/app/shareds/nebular-modules/nebular-modules.module';
import { ClientRoutingModule } from './client-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NebularModulesModule
  ],
  exports:[
    ClientComponent
  ]
})
export class ClientModule { }
