import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/views/not-found/not-found.component';
import { NotFoundHeaderComponent } from './shared/components/not-found-header/not-found-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotFoundHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
