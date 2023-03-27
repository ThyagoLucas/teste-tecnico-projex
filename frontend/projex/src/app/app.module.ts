import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/app/pages/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './features/login/login.component';
import { PropertyComponent } from './features/property/property.component';
import { RegisterComponent } from './features/register/register.component';
import { StorageComponent } from './shareds/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    LoginPageComponent,
    LoginComponent,
    PropertyComponent,
    RegisterComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
