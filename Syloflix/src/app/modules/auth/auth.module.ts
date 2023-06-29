import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FooterAuthComponent } from './components/footerAuth/footerAuth.component'; 
import { HeaderAuthComponent } from './components/headerAuth/headerAuth.component'; 
import { LoginBoxComponent } from './components/login-box/login-box.component'; 
import { LoginComponent } from './views/login/login.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterAuthComponent,
    HeaderAuthComponent,
    LoginBoxComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
})
export class AuthModule { }
