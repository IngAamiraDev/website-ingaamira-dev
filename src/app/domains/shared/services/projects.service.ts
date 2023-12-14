import { Injectable } from '@angular/core';

import { Tag } from '../models/tag';
import { Project } from './../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    { id: 0,
      name: 'E-ShopApp',
      summary: 'E-ShopApp es una aplicación de comercio electrónico desarrollada en Java con el framework Spring Boot. La aplicación permite a los usuarios explorar y comprar productos en línea, organizados en categorías.',
      description: '',
      projectLink: 'https://github.com/IngAamira/E-ShopApp',
      pictures: ["../../../../../assets/imgs/projects/eshopapp/folder.png"],
      tags: [Tag.JAVA, Tag.SPRING]
    },
    { id: 1,
      name: 'TechSolutions',
      summary: 'Este es un proyecto de comercio electrónico desarrollado en Java utilizando Spring Boot. La aplicación implementa funcionalidades clave para gestionar productos, pedidos, usuarios y el proceso de compra en línea.',
      description: '',
      projectLink: 'https://github.com/IngAamira/TechSolutions',
      pictures: ["../../../../../assets/imgs/projects/techsolutions/folder.png"],
      tags: [Tag.JAVA, Tag.SPRING]
    }

  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id' + id);
    }

    return project

  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }

    });

    return filteredProjects;

  }

}
