import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-carrousel-grande',
  templateUrl: './carrousel-grande.component.html',
  styleUrls: ['./carrousel-grande.component.scss']
})
export class CarrouselGrandeComponent implements OnInit {
  isLoading: boolean = true;
  cardsData: any[] = [];

  constructor(private _dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getSeriesAndMovies("movie", "popular");
  }

  getSeriesAndMovies(seccion: string, index: string) {
    this.isLoading = true;
    this._dashboardservice.getSeriesAndMovies(seccion, index).subscribe(
      (response) => {
        const movies1: { image: string; title: any; date: any; popularity: any }[] = [];
    
        for (let i = 0; i < 19; i++) {
          if (response.results[i].backdrop_path != null) {
        
            const imagePath = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
            const title = response.results[i].title;
            const date = response.results[i].release_date;
            const popularity = response.results[i].vote_average;
            const movieExists = this.cardsData.some(movie => movie.title === title);

            if (!movieExists) {
              movies1.push({
                image: imagePath,
                title: title,
                date: date,
                popularity: popularity,
              });

            }
  
          }
            
        }
  
        this.cardsData = this.cardsData.concat(movies1);
        this.isLoading = false;
      },
      (error) => {
        console.error("Error loading movies:", error);
        this.isLoading = false;
      }
    );
  }
}
