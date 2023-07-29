import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './views/home/home.component'; 
import { CarrouselGrandeComponent } from './components/carrousel-grande/carrousel-grande.component'; 
import { CarrouselChicoComponent } from './components/carrousel-chico/carrousel-chico.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { DashboardService } from './services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { WatchComponent } from './views/watch/watch.component';
import { ModalinfoComponent } from './components/modalinfo/modalinfo.component';
import { BrowseComponent } from './views/browse/browse.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CarrouselGrandeComponent,
    CarrouselChicoComponent,
    FooterComponent,
    HeaderComponent,

    CardComponent,

    WatchComponent,
    ModalinfoComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [
    DashboardService
  ],
})
export class DashboardModule { }
