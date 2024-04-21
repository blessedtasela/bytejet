import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-berliz',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './berliz.component.html',
  styleUrl: './berliz.component.css'
})
export class BerlizComponent {
  skills = [
    { id: 1, 'skill': 'Angular' },
    { id: 2, 'skill': 'Typescript' },
    { id: 3, 'skill': 'HTML5' },
    { id: 4, 'skill': 'CSS3' },
    { id: 5, 'skill': 'Tailwind ' },
    { id: 6, 'skill': 'Typescript' },
    { id: 7, 'skill': 'Figma' },
    { id: 8, 'skill': 'AWS' },
    { id: 9, 'skill': 'Spring Boot' },
    { id: 10, 'skill': 'Java' },
    { id: 11, 'skill': 'Postgres SQL' },
    { id: 12, 'skill': 'Scrum' },
    { id: 13, 'skill': 'Web Socket' },
    { id: 14, 'skill': 'Git/GitHub' },
  ]
}
