import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent {

  constructor(private _router: Router){}

  ngOnInit(){
    localStorage.setItem('isLogged', 'false');
  }

  mail: string = '';
  contrasenia: string = '';
  loginFalladito: boolean = false;
  error: string = '';

  submitForm() {
    let miLista: any = [];
    let listaJSON: any = JSON.stringify(miLista);
    if (this.mail === 'dev.team@syloflix.com' && this.contrasenia === 'syloflix') {
      // Loggeado.
      this.loginFalladito = false;
      localStorage.setItem('isLogged', 'true');
      if (localStorage.getItem("myFavoriteList") === null) {
        localStorage.setItem("myFavoriteList", listaJSON);
      }
      this._router.navigate(['home']);
      console.log('Loggeado.');
    } else {
      // Falló todo nomás.
      this.loginFalladito = true;
      this.error = 'Datos erroneos. Reinténtalo o contacta con soporte.';
      console.log('Falló todo nomás.');
    }

  }

}
