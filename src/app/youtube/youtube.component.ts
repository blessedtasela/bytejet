import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  skills = [
    { id: 1, 'skill': 'Angular' },
    { id: 2, 'skill': 'Typescript' },
    { id: 3, 'skill': 'HTML5' },
    { id: 4, 'skill': 'CSS3' },
    { id: 5, 'skill': 'Tailwind ' },
    { id: 6, 'skill': 'Typescript' },
    { id: 11, 'skill': 'Netlify' },
    { id: 14, 'skill': 'Git/GitHub' },
  ]
}
