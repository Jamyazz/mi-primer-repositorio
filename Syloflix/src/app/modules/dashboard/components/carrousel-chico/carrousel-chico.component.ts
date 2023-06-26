import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('.slick-carousel').slick({
        lazyLoad: 'ondemand',
        arrows: true,
        dots: true,
        fade: false,
        infinite: false,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 4,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  }
}
