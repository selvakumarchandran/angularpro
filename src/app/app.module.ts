import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MyAppServiceService} from './my-app-service.service';
import {HttpModule} from '@angular/http';
import {PopupModule} from 'ng2-opd-popup';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  providers: [MyAppServiceService, PopupModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
