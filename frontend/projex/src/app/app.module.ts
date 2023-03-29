import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component';
import { TokenInterceptor } from './features/auth/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
