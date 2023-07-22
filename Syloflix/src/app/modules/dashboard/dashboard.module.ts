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
import { LoaderComponent } from './components/loader/loader.component';
import { SeriesComponent } from './views/series/series.component';

import { MoviesComponent } from './views/movies/movies.component';

import { PopularNewsComponent } from './views/popular-news/popular-news.component';

import { SearchComponent } from './views/search/search.component';


import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MylistComponent } from './views/mylist/mylist.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CarrouselGrandeComponent,
    CarrouselChicoComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    SeriesComponent,

    MoviesComponent,

    PopularNewsComponent,

    SearchComponent,

    CardComponent,
      MylistComponent
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
