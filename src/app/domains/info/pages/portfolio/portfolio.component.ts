import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../../shared/models/project';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Project[] = [

    { id: 0,
      name: 'E-ShopApp',
      summary: 'E-ShopApp es una aplicación de comercio electrónico desarrollada en Java con el framework Spring Boot. La aplicación permite a los usuarios explorar y comprar productos en línea, organizados en categorías.',
      description: '',
      projectLink: 'https://github.com/IngAamira/E-ShopApp',
      pictures: [],
      tags: [Tag.JAVA, Tag.SPRING]
    }

  ];

  constructor (private titleService: Title) {
    this.titleService.setTitle('Portfolio')
  }

}
