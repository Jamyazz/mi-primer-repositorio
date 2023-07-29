// TS ACTUAL
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent {
  cardsData: any[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 6;
  totalImagesToShow: number = 42;
  percent: number = 0;
  locationRoute: any;
  peli: any;
  isScrollDisabled: boolean = false;

  constructor(private _dashboardservice: DashboardService, private location: Location) {
    this.locationRoute = this.location.path();
  }

  ngOnInit() {
    this.getSeriesAndMovies("movie", "1");
    this.getSeriesAndMovies("movie", "2");
    this.getSeriesAndMovies("movie", "3");
  }
  
  passMovie(movie: any): void {

    this.peli = movie;

    this.isScrollDisabled = true;

    document.body.classList.add('no-scroll');
        
  }

  getSeriesAndMovies(seccion: string, index: string) {
    this._dashboardservice.getSeriesAndMovies(seccion, index).subscribe(
      (response) => {
        const movies1: { image: string; rezise: string; title: any; date: any; popularity: any; review: string; }[] = [];
  
        // Recorremos las primeras 19 películas disponibles y las agregamos hasta alcanzar 42 imágenes
        for (let i = 0; i < 19; i++) {
          if ((response.results[i].backdrop_path != null) && (this.cardsData.length < this.totalImagesToShow)) {
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
          }
        }
  
        // Verificar si al agregar las películas se supera el límite de 42 imágenes
        if (this.cardsData.length + movies1.length > this.totalImagesToShow) {
          const remainingSlots = this.totalImagesToShow - this.cardsData.length;
          this.cardsData = this.cardsData.concat(movies1.slice(0, remainingSlots));
        } else {
          this.cardsData = this.cardsData.concat(movies1);
        }
      },
      (error) => {
        console.error("Error loading movies:", error);
      }
    );
  }

  addToFavorite(movie: any) {
    let listaGuardada: any = localStorage.getItem("myFavoriteList");
    let miListaRecuperada: any[] = JSON.parse(listaGuardada) || [];
  
    const movieIndex = miListaRecuperada.findIndex((favMovie) => favMovie.title === movie.title);
  
    if (movieIndex === -1) {
      miListaRecuperada.push(movie);
    } else {
      miListaRecuperada.splice(movieIndex, 1);
      if (this.locationRoute === '/mylist') {
        location.reload();
      }
    } 
    let listaJSON = JSON.stringify(miListaRecuperada);
    localStorage.setItem("myFavoriteList", listaJSON);
  }
  

  getFavorites() {
    
    let listaGuardada: any = localStorage.getItem("myFavoriteList");

    let miListaRecuperada: any [] = JSON.parse(listaGuardada);

    this.cardsData = this.cardsData.concat(miListaRecuperada);

  }

  favorited(movieTitle: string) {

    const listaGuardada: any = localStorage.getItem("myFavoriteList");

    const miListaRecuperada: any[] = JSON.parse(listaGuardada) || [];
    
    return miListaRecuperada.some((favMovie) => favMovie.title === movieTitle);

  }

  randomForYou() {
    this.percent = Math.floor(Math.random() * 101);
  }
  
  
  shuffleArray(arr: any[]): any[] {
    const shuffledArray = arr.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  goForward(): void {
    const maxIndex = this.cardsData.length - this.itemsToShow;
    this.currentIndex += this.itemsToShow;
  
    if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }
  }
  

  goBack(): void {
    const maxIndex = this.cardsData.length - this.itemsToShow;
    this.currentIndex -= this.itemsToShow;
  
    // Asegurarse de que siempre se muestren exactamente 42 elementos
    if (this.currentIndex < 0) {
      this.currentIndex = maxIndex;
    }
  }
}
