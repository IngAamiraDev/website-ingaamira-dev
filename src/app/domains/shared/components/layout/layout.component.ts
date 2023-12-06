import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { NavbarComponent } from './../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
