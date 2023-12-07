import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { NavbarComponent } from './../../../shared/components/navbar/navbar.component';
import { FooterComponent } from './../../../shared/components/footer/footer.component';
import { ParticleBackgroundComponent } from './../../../shared/components/particle-background/particle-background.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent, FooterComponent, ParticleBackgroundComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
