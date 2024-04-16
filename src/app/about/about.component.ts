import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    { id: 1, skill: 'Java' },
    { id: 2, skill: 'SpringBoot' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'Angular' },
    { id: 5, skill: 'Typescript' },
    { id: 6, skill: 'Scrum' },
    { id: 7, skill: 'HTML5' },
    { id: 8, skill: 'CSS3' },
    { id: 9, skill: 'Tailwind' },
    { id: 10, skill: 'Bootstrap' },
    { id: 12, skill: 'Python' },
    { id: 13, skill: 'C/C++' },
    { id: 14, skill: 'Dart' },
    { id: 15, skill: 'Delphi' },
    { id: 16, skill: 'Codesys' },
    { id: 17, skill: 'C#' },
    { id: 18, skill: 'Android' },
    { id: 19, skill: 'PHP' },
    { id: 20, skill: 'Flutter' },
    { id: 21, skill: 'Postgres SQL' },
    { id: 22, skill: 'Arduino' },
    { id: 23, skill: 'VHDL' },
    { id: 24, skill: 'uVision' },
    { id: 25, skill: 'MySQL' },
    { id: 26, skill: 'SQLite' },
    { id: 27, skill: 'OpenGL' },
    { id: 28, skill: 'SDL' },
    { id: 29, skill: 'Qt' },
    { id: 30, skill: 'OpenCV' },
    { id: 31, skill: 'Git' },
    { id: 32, skill: 'Kaban' },
    { id: 33, skill: 'Svn' },
    { id: 34, skill: 'AWS' },
    { id: 35, skill: 'Office' },
    { id: 36, skill: 'Jira' }
];

    constructor() { }
    
    openUrl(url: any) {
      window.open(url, '_blank');
    }
}
