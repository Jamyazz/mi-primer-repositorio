import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {  
  
  listit: any[] = ["News", "Branded", "Our Specials", "Enjoyment", "Internationals", "Reminders"];
  
}
