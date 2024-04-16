import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
