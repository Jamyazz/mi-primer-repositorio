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
    'I am detail-oriented, analytical, persevering, proactive, and empathetic. I possess the ability to adapt and learn quickly. I enjoy working in a team, learning from different perspectives, and fostering a positive environment. Currently, I work as an Administrative Assistant in the administration and finance sector at Gemini Pharmaceuticals. I am a Computer Technician graduate from Republica del Paraguay Technical Institute in Buenos Aires, and I am pursuing a degree in Computer Engineering at the National University of La Matanza. I am constantly engaged in a process of training and learning, seeking to further develop my skills.',
    "I'm a web developer specializing in HTML, CSS, and JS. Coder House gave me a strong foundation in web development. I've also attended Bootcamps with Radium Rocket and Revolución Digital, acquiring advanced skills and staying up-to-date with the latest tech trends.",
  ];
  photos: string[] = [
    '../../../../../assets/about-us/German.jpg',
    '../../../../../assets/about-us/Noelia.jpg',
    '../../../../../assets/about-us/Agustin.jpg',
  ];
}
