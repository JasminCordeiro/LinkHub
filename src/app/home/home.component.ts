import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import {Clipboard,ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeToggleComponent,ClipboardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor(private clipboard:Clipboard) { }

  copyLink(link: string){
    this.clipboard.copy(link);
  }

}
