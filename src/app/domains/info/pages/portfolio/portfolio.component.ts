import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../../shared/models/project';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    pictures: [],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
  };

  constructor (private titleService: Title) {
    this.titleService.setTitle('Portfolio')
  }

}
