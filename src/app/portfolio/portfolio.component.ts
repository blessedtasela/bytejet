import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { LandingComponent } from '../landing/landing.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ServicesComponent } from '../services/services.component';
import { BerlizComponent } from '../berliz/berliz.component';
import { GamingComponent } from '../gaming/gaming.component';
import { Youtube } from 'angular-feather/icons';
import { YoutubeComponent } from '../youtube/youtube.component';
import { EcomComponent } from '../ecom/ecom.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    AboutComponent,
    LandingComponent,
    ContactComponent,
    ProjectsComponent,
    ScrollToTopComponent,
    ServicesComponent,
    BerlizComponent,
    GamingComponent,
    YoutubeComponent,
    EcomComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
