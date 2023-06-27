import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './views/home/home.component'; 
import { CarrouselGrandeComponent } from './components/carrousel-grande/carrousel-grande.component'; 
import { CarrouselChicoComponent } from './components/carrousel-chico/carrousel-chico.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CarrouselGrandeComponent,
    CarrouselChicoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
