import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { NavbarComponent } from './../../../shared/components/navbar/navbar.component';
import { AboutComponent } from  './../../../info/pages/about/about.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent, AboutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
