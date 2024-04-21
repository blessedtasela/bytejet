import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skills, TechSkills } from './skills.interface';

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
  skills: Skills[];
  constructor(private techSkills: TechSkills) {
    this.skills = this.techSkills.skills;
  }

  openUrl(url: any) {
    window.open(url, '_blank');
  } 
}