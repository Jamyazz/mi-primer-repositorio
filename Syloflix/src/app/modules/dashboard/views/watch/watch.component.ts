import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
