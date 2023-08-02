import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  names: string[] = ['German M. Anselmo', 'Noelia Chavez', 'Agustin Staiger'];
  description: string[] = [
    "Full Stack Python Developer at Codo a Codo 4.0, Advanced Python Programmer at Udemy. Currently taking FrontEnd courses at Syloper, FullStack Java & React at Globant + Egg (Code Your Future), and BackEnd Java at ONE Oracle Next Education. In web development, I handle technologies such as HTML, CSS, SASS, Bootstrap, Angular, VueJS, JS, TS, Python (Django/Flask), Java, and MySQL. As for software development, I am proficient in Python and a wide range of libraries, as well as Java 8+. Additional tools include VSCode, NetBeans, Git/Github, Postman, XAMPP, and Node.js.",
    "I like teamwork, learning from other perspectives, and creating a good working environment. I am a Computer Technician graduated from the Technical Republic of Paraguay in Buenos Aires and currently studying Computer Engineering at the National University of La Matanza. I am constantly in a process of learning and training, where I aim to develop my skills in the field of web development.",
    "I'm a web developer specializing in HTML, CSS, and JS. Coder House gave me a strong foundation in web development. I've also attended Bootcamps with Radium Rocket and Revolución Digital, acquiring advanced skills and staying up-to-date with the latest tech trends."
  ];
  photos: string[] = [
    '../../../../../assets/about-us/Hermann.jpg',
    '../../../../../assets/about-us/Noelle.jpg',
    '../../../../../assets/about-us/Austin.jpg'
  ];
  linkedin: string[] = [
    'https://www.linkedin.com/in/german-anselmo/',
    'https://www.linkedin.com/in/noelia-jazmin-chavez-/',
    'https://www.linkedin.com/in/agust%C3%ADn-staiger-186272235/'
  ];
  github: string[] = [
    'https://github.com/gmanselmo',
    'https://github.com/Jamyazz',
    'https://github.com/agustinstaiger9'
  ];
}
