import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ProjectsService } from '../../../shared/services/projects.service';
import { Project } from '../../../shared/models/project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featureProject = {} as Project;

  constructor (private titleService: Title, private projectService: ProjectsService, public bsModalRef: BsModalRef) {
    this.titleService.setTitle('Home')
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
  }

}
