import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './../../../info/pages/about/about.component';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featureProject = {} as Project;

  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Home')
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
  }

}
