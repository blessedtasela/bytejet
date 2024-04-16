import { Component, ElementRef } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IconsModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = false;

  constructor(private elementRef: ElementRef) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToComponent(componentId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  sendEmail(): void {
    const emailAddress = 'taselablessed@gmail.com';
    const subject = 'Book an appointment with Blessed';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  }

}

