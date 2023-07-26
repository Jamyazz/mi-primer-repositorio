import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrousel-grande',
  templateUrl: './carrousel-grande.component.html',
  styleUrls: ['./carrousel-grande.component.scss']
})
export class CarrouselGrandeComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading: boolean = true;
  cardsData: any[] = [];
  @ViewChild('contenedor') containerRef!: ElementRef;
  private intervalSubscription: Subscription | undefined;
  peli: any;
  isScrollDisabled: boolean = false;

  constructor(private _dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getSeriesAndMovies("movie", "popular");
  }

  ngAfterViewInit(): void {
    const containerElement = this.containerRef.nativeElement as HTMLElement;
    const firstElement = containerElement.firstChild as HTMLElement;
    this.changeImageSlider();
  }

  changeImageSlider(): any {
    const desordenarCardsData = () => {
      this.cardsData = this.shuffleArray(this.cardsData);
    };
    this.intervalSubscription = interval(10000).subscribe(() => {
      desordenarCardsData();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  private shuffleArray(array: any[]): any[] {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  

  getSeriesAndMovies(seccion: string, index: string) {
    this.isLoading = true;
    this._dashboardservice.getSeriesAndMovies(seccion, index).subscribe(
      (response) => {
        const movies1: { image: string; title: any; date: any; popularity: any, review: string; }[] = [];
    
        for (let i = 0; i < 19; i++) {
          if (response.results[i].backdrop_path != null) {
        
            const imagePath = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
            const title = response.results[i].title;
            const date = response.results[i].release_date;
            const popularity = response.results[i].vote_average;
            const movieExists = this.cardsData.some(movie => movie.title === title);
            const review = response.results[i].overview;

            if (!movieExists) {
              movies1.push({
                image: imagePath,
                title: title,
                date: date,
                popularity: popularity,
                review: review,
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
