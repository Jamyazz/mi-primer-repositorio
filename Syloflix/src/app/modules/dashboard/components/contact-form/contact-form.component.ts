import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  send: boolean = false;
  apiUrl = 'https://formspree.io/f/mknlokjq';

  constructor(private http: HttpClient) {}

  askHelp(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    this.http.post(this.apiUrl, formData)
      .subscribe(
        response => {
          this.send = true;
          setTimeout(function() {
            window.location.href = "/";
          }, 5000);
        },
        error => {
          console.error('Error al enviar el formulario:', error);
        }

      );

  }
  
}
