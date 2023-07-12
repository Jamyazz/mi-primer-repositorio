import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent {
  isLoading: boolean = true;
  imageResponse: string[] = [];
  titleResponse: string[] = [];
  descriptionResponse: string[] = [];
  currentIndex: number = 0;

  @ViewChild('carrousel', { static: false }) carrousel!: ElementRef;

  constructor(private renderer: Renderer2, private _dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.isLoading = true;

    this._dashboardservice.getMoviesPopular().subscribe(
      (response) => {
        for (let i = 0; i < response.results.length; i++) {
          this.imageResponse[i] = `https://image.tmdb.org/t/p/original${response.results[i].backdrop_path}`;
        }

        this.isLoading = false; // Finalización de la carga
      },
      (error) => {
        console.log(error);
      }
    );
  }

  adelante(): void {
    const carrouselElement = this.carrousel.nativeElement;
    const numImages = this.imageResponse.length;
    this.currentIndex = (this.currentIndex + 1) % numImages;
    const translateAmount = this.currentIndex * -3.55;
    this.renderer.setStyle(carrouselElement, 'transform', `translateX(${translateAmount}%)`);
  }
  
  atras(): void {
    const carrouselElement = this.carrousel.nativeElement;
    const numImages = this.imageResponse.length;
    this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    const translateAmount = this.currentIndex * -3.55;
    this.renderer.setStyle(carrouselElement, 'transform', `translateX(${translateAmount}%)`);
  }

}
