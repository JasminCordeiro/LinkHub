import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'LinkHub';

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
}
}
