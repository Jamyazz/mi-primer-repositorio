import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-carrousel-chico',
  templateUrl: './carrousel-chico.component.html',
  styleUrls: ['./carrousel-chico.component.scss']
})
export class CarrouselChicoComponent {


  constructor(private _dashboardservice: DashboardService) {}

  ngOnInit() {

  }

 

}