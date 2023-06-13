// Angular Imports
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '@environment'
// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NoUserFooterComponent } from './components/no-user-footer/no-user-footer.component';
import { NoUserHeaderComponent } from './components/no-user-header/no-user-header.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginComponent } from './views/login/login.component';
import { IndexComponent } from './views/index/index.component';
import { CarrouselChicoComponent } from './components/carrousel-chico/carrousel-chico.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselGrandeComponent } from './components/carrousel-grande/carrousel-grande.component'

@NgModule({
	declarations: [AppComponent, NoUserFooterComponent, NoUserHeaderComponent, LoginBoxComponent, LoginComponent, IndexComponent, CarrouselChicoComponent, HeaderComponent, FooterComponent, CarrouselGrandeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
