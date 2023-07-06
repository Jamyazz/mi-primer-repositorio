import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { NotFoundComponent } from './shared/views/not-found/not-found.component';
import { NotFoundHeaderComponent } from './shared/components/not-found-header/not-found-header.component';
=======
import { FooterAuthComponent } from './modules/auth/components/footerAuth/footerAuth.component';
import { HeaderAuthComponent } from './modules/auth/components/headerAuth/headerAuth.component';
import { LoginBoxComponent } from './modules/auth/components/login-box/login-box.component';
import { LoginComponent } from './modules/auth/views/login/login.component';
import { HomeComponent } from './modules/dashboard/views/home/home.component';
import { CarrouselGrandeComponent } from './modules/dashboard/components/carrousel-grande/carrousel-grande.component';
import { CarrouselChicoComponent } from './modules/dashboard/components/carrousel-chico/carrousel-chico.component';
import { FooterComponent } from './modules/dashboard/components/footer/footer.component';
import { HeaderComponent } from './modules/dashboard/components/header/header.component';
>>>>>>> bdaca53f (foot/head)
=======
import { FooterAuthComponent } from './modules/auth/components/footerAuth/footerAuth.component';
import { HeaderAuthComponent } from './modules/auth/components/headerAuth/headerAuth.component';
import { LoginBoxComponent } from './modules/auth/components/login-box/login-box.component';
import { LoginComponent } from './modules/auth/views/login/login.component';
import { HomeComponent } from './modules/dashboard/views/home/home.component';
import { CarrouselGrandeComponent } from './modules/dashboard/components/carrousel-grande/carrousel-grande.component';
import { CarrouselChicoComponent } from './modules/dashboard/components/carrousel-chico/carrousel-chico.component';
import { FooterComponent } from './modules/dashboard/components/footer/footer.component';
import { HeaderComponent } from './modules/dashboard/components/header/header.component';
=======
import { NotFoundComponent } from './shared/views/not-found/not-found.component';
import { NotFoundHeaderComponent } from './shared/components/not-found-header/not-found-header.component';
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    FooterAuthComponent,
    HeaderAuthComponent,
    LoginBoxComponent,
    LoginComponent,
    HomeComponent,
    CarrouselGrandeComponent,
    CarrouselChicoComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1
    NotFoundComponent,
    NotFoundHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
<<<<<<< HEAD
=======
    FooterAuthComponent,
    HeaderAuthComponent,
    LoginBoxComponent,
    LoginComponent,
    HomeComponent,
    CarrouselGrandeComponent,
    CarrouselChicoComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> bdaca53f (foot/head)
=======
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
