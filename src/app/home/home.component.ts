import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
