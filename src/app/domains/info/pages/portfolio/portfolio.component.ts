import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../../shared/models/project';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}
