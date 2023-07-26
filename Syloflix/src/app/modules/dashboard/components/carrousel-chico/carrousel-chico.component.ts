// TS ACTUAL
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent {
  isLoading: boolean = true;
  currentIndex: number = 0;

  @ViewChild('carrousel', { static: false }) carrousel!: ElementRef;

  cardsData: any[] = [];

  constructor(private _dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getSeriesAndMovies("movie", "popular");
  }

  getSeriesAndMovies(seccion: string, index: string) {
    this._dashboardservice.getSeriesAndMovies(seccion, index).subscribe(
      (response) => {
        const movies1: { image: string; rezise: string; title: any; date: any; popularity: any; review: string; }[] = [];
    
        for (let i = 0; i < 19; i++) {
          if (response.results[i].backdrop_path != null) {
            if (seccion == "movie") {

              const imagePath = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
              const imageRezise = `https://image.tmdb.org/t/p/w500${response.results[i].backdrop_path}`;
              const title = response.results[i].title;
              const date = response.results[i].release_date;
              const popularity = response.results[i].vote_average;
              const movieExists = this.cardsData.some(movie => movie.title === title);
              const review = response.results[i].overview;

              if (!movieExists) {
                movies1.push({
                  image: imagePath,
                  rezise: imageRezise,
                  title: title,
                  date: date,
                  popularity: popularity,
                  review: review,
                });

              }
              
            } else if (seccion == "tv") {

              const imagePath = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
              const imageRezise = `https://image.tmdb.org/t/p/w500${response.results[i].backdrop_path}`;
              const title = response.results[i].original_name;
              const date = response.results[i].first_air_date;
              const popularity = response.results[i].vote_average;
              const movieExists = this.cardsData.some(movie => movie.title === title);
              const review = response.results[i].overview;

              if (!movieExists) {
                movies1.push({
                  image: imagePath,
                  rezise: imageRezise,
                  title: title,
                  date: date,
                  popularity: popularity,
                  review: review,                  
                });
                
              }


            }
            
          }

        }
   
        this.cardsData = this.cardsData.concat(movies1);

      },
      (error) => {
        console.error("Error loading movies:", error);

      }
    );
  }

  adelante(): void {
    const carrouselElement = this.carrousel.nativeElement;
    const numImages = this.cardsData.length;
    this.currentIndex = (this.currentIndex + 1) % numImages;
    const translateAmount = this.currentIndex * -3.55;
    carrouselElement.style.transform = `translateX(${translateAmount}%)`;
  }

  atras(): void {
    const carrouselElement = this.carrousel.nativeElement;
    const numImages = this.cardsData.length;
    this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    const translateAmount = this.currentIndex * -3.55;
    carrouselElement.style.transform = `translateX(${translateAmount}%)`;
}
}
