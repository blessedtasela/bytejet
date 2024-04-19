import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GamingDetailsComponent } from './gaming-details/gaming-details.component';
import { BerlizDetailsComponent } from './berliz-details/berliz-details.component';
import { EcomDetailsComponent } from './ecom-details/ecom-details.component';
import { YoutubeDetailsComponent } from './youtube-details/youtube-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'berliz', component: BerlizDetailsComponent },
    { path: 'gaming', component: GamingDetailsComponent },
    { path: 'youtube', component: YoutubeDetailsComponent },
    { path: 'ecom', component: EcomDetailsComponent },
];
