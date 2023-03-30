import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { AisHeaderModule } from '../ais-header/ais-header.module';
import { AisFooterModule } from '../ais-footer/ais-footer.module';



@NgModule({
  declarations: [
    SidebarLayoutComponent
  ],
  imports: [
    CommonModule,
		NbSidebarModule,
		NbLayoutModule,
  ],
	exports: [
		SidebarLayoutComponent,
	]
})
export class SidebarLayoutModule { }
