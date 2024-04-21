import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    IconsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts = [
    {
      'id': 1,
      'url': 'mailto:taselablessed@gmail.com?subject=Book an apointment',
      'message': 'Email',
      'icon': 'mail'
    },
    {
      'id': 2,
      'url': 'https://www.fiverr.com/bytejet',
      'message': 'Fiverr',
      'icon': 'link'
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
      'message': 'github',
      'icon': 'github'
    },
    {
      'id': 5,
      'url': 'https://www.upwork.com/freelancers/~014c9b44aa31dce5e0',
      'message': 'Upwork',
      'icon': 'link-2'
    },
    {
      'id': 6,
      'url': 'https://wa.me/+12369900823?text=Hi Blessed, I would like to...',
      'message': 'Whatsapp',
      'icon': 'message-circle'
    }
  ]
}
