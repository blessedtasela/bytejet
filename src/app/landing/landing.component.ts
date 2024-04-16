import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private elementRef: ElementRef) { }

  scrollToComponent(componentId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openUrl(url: any) {
    window.open(url, '_blank');
  }
}
