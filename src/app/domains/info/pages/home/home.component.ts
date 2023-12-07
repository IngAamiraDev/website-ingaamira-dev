import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './../../../info/pages/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor (private titleService: Title) {
    this.titleService.setTitle('Home')
  }

}
