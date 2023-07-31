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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WatchComponent } from './views/watch/watch.component';
import { ModalinfoComponent } from './components/modalinfo/modalinfo.component';
import { BrowseComponent } from './views/browse/browse.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { InterceptorService } from './services/interceptor.service';

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
    InfiniteScrollModule,
    NgxSpinnerModule,
    
  ],
  providers: [
    DashboardService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
})
export class DashboardModule { }
