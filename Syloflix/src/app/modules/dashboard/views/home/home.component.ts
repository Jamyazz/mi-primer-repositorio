import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {  

  constructor(private spinnerService: SpinnerService) {this.spinnerService.callSpinner();}

  listit: any[] = ["News", "Branded", "Our Specials", "Enjoyment", "Internationals", "Reminders"];
  
}
