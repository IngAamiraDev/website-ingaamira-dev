import { Component, OnInit } from '@angular/core';

declare var particlesJS: any; // Declara particlesJS como una variable global

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [],
  template: '<div id="particles-js"></div>',
  styleUrl: './particle-background.component.css'
})
export class ParticleBackgroundComponent implements OnInit {

  ngOnInit(): void {
    console.log('Initializing particlesJS');
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        // ... otras opciones de configuración
      },
      // ... otras opciones de configuración
    });
  }
}
