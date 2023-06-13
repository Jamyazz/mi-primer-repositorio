import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent {
  @ViewChild('elcorreo') mail!: ElementRef;
  @ViewChild('lapassword') pass!: ElementRef;

  cambiar(): void {

    const elcorreo: any = document.querySelector("#email");
    elcorreo.style.color= "red";
    

  }


}
