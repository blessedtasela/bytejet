import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    IconsModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contacts = [
    {
      'id': 1,
      'url': 'taselablessed@gmail.com',
      'message': 'Email',
      'icon': 'mail'
    },
    {
      'id': 3,
      'url': 'https://www.linkedin.com/in/joel-wabo-a78790162/',
      'message': 'Linkedin',
      'icon': 'linkedIn'
    },
    {
      'id': 4,
      'url': 'https://github.com/blessedtasela',
      'message': 'Github',
      'icon': 'github'
    },
    {
      'id': 6,
      'url': 'https://wa.me/+12369900823?text=Hi Blessed, I would like to...',
      'message': 'Whatsapp',
      'icon': 'message-circle'
    }
  ]

  constructor() { }
  openBlessedTasela() {
    window.open('https://blessed-tasela.netlify.app/', '_blank');
  }
}
