import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    IconsModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  emailLink: string;

  constructor() {
    const email = 'taselablessed@gmail.com';
    const subject = encodeURIComponent("Software Enginner");
    const body = encodeURIComponent("Hello ByteJet, I would like to...");
    this.emailLink = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  openWhatsapp() {

  }
}
