import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  private swiper!: Swiper;
  private totalSlides = 0;
  private visibleSlides = 2;
  private currentSlide = 0;

  ngAfterViewInit(): void {
    this.initSwiper();
    this.initCarouselButtons();
  }

  private initSwiper(): void {
    const slides = this.swiperContainer.nativeElement.querySelectorAll('.swiper-slide');
    this.totalSlides = Math.min(slides.length, 20);

    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: this.visibleSlides,
      spaceBetween: 10,
      navigation: {
        prevEl: '.flecha__anterior',
        nextEl: '.flecha__siguiente',
      }
    });

    this.swiper.on('slideChange', () => {
      this.currentSlide = this.swiper.activeIndex;
      this.updateCarouselButtons();
    });

    this.updateCarouselButtons();
  }

  private initCarouselButtons(): void {
    const prevButton = document.querySelector('.flecha__anterior');
    const nextButton = document.querySelector('.flecha__siguiente');

    prevButton?.addEventListener('click', () => {
      if (this.currentSlide > 0) {
        this.currentSlide -= this.visibleSlides;
        this.swiper.slidePrev();
        this.updateCarouselButtons();
      }
    });

    nextButton?.addEventListener('click', () => {
      if (this.currentSlide < this.totalSlides - this.visibleSlides) {
        this.currentSlide += this.visibleSlides;
        this.swiper.slideNext();
        this.updateCarouselButtons();
      }
    });

    this.updateCarouselButtons();
  }

  private updateCarouselButtons(): void {
    const prevButton = document.querySelector('.flecha__anterior');
    const nextButton = document.querySelector('.flecha__siguiente');

    if (prevButton && nextButton) {
      prevButton.classList.toggle('disabled', this.currentSlide === 0);
      nextButton.classList.toggle('disabled', this.currentSlide + this.visibleSlides >= this.totalSlides);
    }
  }
}
