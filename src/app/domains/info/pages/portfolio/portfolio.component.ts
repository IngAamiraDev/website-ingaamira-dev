import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../../shared/models/project';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;

  /*Add languages or framewors here*/

  java: boolean = false;
  typescript: boolean = false;
  spring: boolean = false;

  filtering: boolean = false;

  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  /*Add languages or framewors here*/
  Filter() {
    let filterTags: Tag[] = [];

    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.spring) {
      filterTags.push(Tag.SPRING);
    }

    if ( this.java || this.typescript || this.spring) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);

  }

  /*Add languages or framewors here*/
  ResetFilters() {
    this.java = false;
    this.typescript = false;
    this.spring = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }

}
