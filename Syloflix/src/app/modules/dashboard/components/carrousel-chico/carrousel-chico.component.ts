<<<<<<< HEAD
<<<<<<< HEAD
import { AfterViewInit, Component } from '@angular/core';

declare var $: any;
=======
import { Component } from '@angular/core';
>>>>>>> bdaca53f (foot/head)
=======
import { Component } from '@angular/core';
=======
import { AfterViewInit, Component } from '@angular/core';

declare var $: any;
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
export class CarrouselChicoComponent {

=======
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1
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
<<<<<<< HEAD
=======
export class CarrouselChicoComponent {

>>>>>>> bdaca53f (foot/head)
=======
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1
}
