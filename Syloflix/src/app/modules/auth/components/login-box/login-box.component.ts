<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
>>>>>>> bdaca53f (foot/head)
=======
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent {

<<<<<<< HEAD
<<<<<<< HEAD
=======
  @ViewChild('elcorreo') mail!: ElementRef;
  @ViewChild('lapassword') pass!: ElementRef;

  cambiar(): void {

    const elcorreo: any = document.querySelector("#email");
    elcorreo.style.color= "red";
=======
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1
  constructor(private _router: Router){}

  ngOnInit(){
    localStorage.setItem('isLogged', 'false');
  }

  mail: string = '';
  contrasenia: string = '';
  loginFalladito: boolean = false;
  error: string = '';

  submitForm() {
    if (this.mail === 'dev.team@syloflix.com' && this.contrasenia === 'syloflix') {
      // Loggeado.
      this.loginFalladito = false;
      localStorage.setItem('isLogged', 'true');
      this._router.navigate(['home']);
      console.log('Loggeado.');
    } else {
      // Falló todo nomás.
      this.loginFalladito = true;
      this.error = 'Datos erroneos. Reinténtalo o contacta con soporte.';
      console.log('Falló todo nomás.');
    }
<<<<<<< HEAD
=======
  @ViewChild('elcorreo') mail!: ElementRef;
  @ViewChild('lapassword') pass!: ElementRef;

  cambiar(): void {

    const elcorreo: any = document.querySelector("#email");
    elcorreo.style.color= "red";
>>>>>>> bdaca53f (foot/head)
=======
>>>>>>> 5daf56d96cf6c9fb230bec6aea1493e57020e7c5
>>>>>>> 86d38e8f282a3966576fd236a0d18ff24e0bdfb1

  }

}
