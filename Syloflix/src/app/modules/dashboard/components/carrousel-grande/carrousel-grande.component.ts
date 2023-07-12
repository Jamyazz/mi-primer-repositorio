import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-carrousel-grande',
  templateUrl: './carrousel-grande.component.html',
  styleUrls: ['./carrousel-grande.component.scss']
})
export class CarrouselGrandeComponent implements OnInit {
  isLoading: boolean = true;
  imageResponse: string[] = [];
  titleResponse: string[] = [];
  descriptionResponse: string[] = [];

  constructor(private _dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  async getPopularMovies() {
    this.isLoading = true;

    try {
      const response = await firstValueFrom(this._dashboardservice.getMoviesPopular());
      this.processResponseData(response);
      this.isLoading = false; // Finalización de la carga
    } catch (error) {
      console.log(error);
    }
  }

  processResponseData(response: any) {
    for (let i = 0; i < response.results.length; i++) {
      this.imageResponse[i] = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;

      let posPunto = response.results[i].original_title.indexOf('.');
      let posDosPuntos = response.results[i].original_title.indexOf(':');
      let subcadena;

      if (posPunto !== -1 && (posDosPuntos === -1 || posPunto < posDosPuntos)) {
        subcadena = response.results[i].original_title.substring(0, posPunto);
      } else if (posDosPuntos !== -1) {
        subcadena = response.results[i].original_title.substring(0, posDosPuntos);
      } else {
        subcadena = response.results[i].original_title;
      }

      this.titleResponse[i] = subcadena;
      this.descriptionResponse[i] = response.results[i].overview;
    }
  }
}
