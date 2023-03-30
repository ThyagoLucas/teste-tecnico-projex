import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './features/auth/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name:'corporate'}),


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
