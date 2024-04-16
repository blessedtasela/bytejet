import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    AboutComponent,
    LandingComponent,
    
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
