import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.scss']
})
export class AboutContactComponent {
  constructor(private location: Location) {

    if (this.location.path() === "/about") {

      this.locacion = "about"

    } else if (this.location.path() === "/contact") {

      this.locacion = "contact"

    }

  }

  locacion: string = "";
}