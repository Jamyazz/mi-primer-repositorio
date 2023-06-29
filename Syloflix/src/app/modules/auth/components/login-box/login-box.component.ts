import { Component } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent {

  ngOnInit(){
    localStorage.setItem('isLogged', 'false');
  }

  mail: string = '';
  contrasenia: string = '';
  loginFalladito: boolean = false;
  error: string = '';

  submitForm() {
    if (this.mail === 'mail@mail.com' && this.contrasenia === '1234admin') {
      // Loggeado.
      this.loginFalladito = false;
      localStorage.setItem('isLogged', 'true');
      console.log('Loggeado.');
    } else {
      // Falló todo nomás.
      this.loginFalladito = true;
      this.error = 'Datos erroneos. Reinténtalo o contacta con soporte.';
      console.log('Falló todo nomás.');
    }

  }

}
