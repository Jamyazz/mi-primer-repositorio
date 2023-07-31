import { Component, OnInit, HostListener } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  cardsData: any[] = [];
  originalCardsData: any[] = [];
  selectedOption: FormControl = new FormControl('Sugerencias para ti');
  collectionType: string = "";
  index: any = 1;
  locationRoute: any;
  searchReload: string = "";
  searcheado: string = "";
  peli: any;
  isScrollDisabled: boolean = false;

  constructor(private _dashboardservice: DashboardService, private location: Location, private spinnerService: SpinnerService) {
    this.locationRoute = this.location.path();

    const url = decodeURIComponent(this.location.path());
    const equals = url.indexOf('=');
    if (equals !== -1) {
      this.searchReload = url.slice(equals + 1);
    }
 
    this.displayName();

  }

  ngOnInit() {
    if (this.location.path() == "/browse/aat/movies") {
      this.collectionType = "Movies"
      this.getSeriesAndMovies("movie", this.index);
    } else if (this.location.path() == "/browse/aat/series") {
      this.collectionType = "TV Show"
      this.getSeriesAndMovies("tv", this.index);
    } else if (this.location.path() == "/browse/aat/popular") {
      this.collectionType = "Recently added"
      this.getSeriesAndMovies("movie", "popular");
    } else if (this.location.path() == "/browse/aat/mylist") {
      this.collectionType = "My list"
      this.getFavorites();
    } else {
      this.collectionType = "Related content to... " + this.searcheado + "."
      this.getSearch();        
    }
  }

  onScroll() {
    if (this.location.path() == "/browse/aat/movies") {
      if (this.index < 5) {
        this.index += 1;
        this.getSeriesAndMovies("movie", this.index);
      }
    } else if (this.location.path() == "/browse/aat/series") {
      if (this.index < 5) {
        this.index += 1;
        this.getSeriesAndMovies("tv", this.index);
      }
    }
  }

  getSeriesAndMovies(seccion: string, index: string) {
    this._dashboardservice.getSeriesAndMovies(seccion, index).subscribe(
      (response) => {
        const movies1: { image: string; rezise: string; title: any; date: any; popularity: any; review: string; foryou:number; }[] = [];
    
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
                  foryou: Math.floor(Math.random() * 101),   
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
                  foryou: Math.floor(Math.random() * 101),               
                });
                
              }


            }
            
          }

        }
   
        this.cardsData = this.cardsData.concat(movies1);
        this.originalCardsData = this.originalCardsData.concat(movies1);

      },
      (error) => {
        console.error("Error loading movies:", error);

      }
    );
  }

  orderCards() {
    const selectedValue = this.selectedOption.value;
    
    if (selectedValue === 'Sugerencias para ti') {
      this.cardsData = [...this.originalCardsData];
    } else if (selectedValue === 'Año de lanzamiento') {
      this.cardsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    } else if (selectedValue === 'A-Z') {
      this.cardsData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedValue === 'Z-A') {
      this.cardsData.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  addToFavorite(movie: any) {
    let listaGuardada: any = localStorage.getItem("myFavoriteList");
    let miListaRecuperada: any[] = JSON.parse(listaGuardada) || [];
  
    const movieIndex = miListaRecuperada.findIndex((favMovie) => favMovie.title === movie.title);
  
    if (movieIndex === -1) {
      miListaRecuperada.push(movie);
    } else {
      miListaRecuperada.splice(movieIndex, 1);
      if (this.locationRoute === '/browse/aat/mylist') {
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

  async getSearch() {

    const popularNews$ = this._dashboardservice.searchMovieShow(this.searchReload);
    const movies1: { image: string; rezise: string; title: any; date: any; popularity: any; review: string; }[] = [];
  
    const response = await popularNews$.toPromise();
    for (let i = 0; i < response.results.length; i++) {
      if (response.results[i].backdrop_path != null) {
        const imagePath = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
        const imageRezise = `https://image.tmdb.org/t/p/w500${response.results[i].backdrop_path}`;
        const title = response.results[i].title;
        const date = response.results[i].release_date;
        const popularity = response.results[i].vote_average;
        const review = response.results[i].overview;
        const movieExists = this.cardsData.some(movie => movie.title === title);
  
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
  
    this.cardsData = this.cardsData.concat(movies1);
    this.originalCardsData = this.originalCardsData.concat(movies1);
  

  }
  

  displayName() {
    for (let i = 0; i < this.searchReload.length; i++) {
      if (this.searchReload.substring(i, i + 1) == "_") {
        this.searcheado += " ";
      } else {
        this.searcheado += this.searchReload.substring(i, i + 1);
      }
    }
  }

  passMovie(movie: any): void {

    this.peli = movie;

    this.isScrollDisabled = true;

    document.body.classList.add('no-scroll');
        
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (this.isScrollDisabled) {
      event.preventDefault();
      // this.peli = null;
    }
  }
  
}
