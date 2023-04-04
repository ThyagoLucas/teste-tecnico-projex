import { NoopAnimationPlayer } from '@angular/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbSidebarModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './features/auth/interceptors/token.interceptor';
import { NebularModulesModule } from './shareds/nebular-modules/nebular-modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NebularModulesModule,
    NbSidebarModule


  ],
  providers: [
    {
			provide:HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
