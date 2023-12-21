import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isSectorExperienceOpen: boolean = false;
  isEducationOpen:boolean = false;
  isSkillsOpen: boolean = false;
  isLanguagesOpen: boolean = false;

  constructor (private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../../../../assets/docs/CV_Dev.pdf');
    //link.setAttribute('download','CV_Dev.pdf');
    link.click();
    link.remove();
  }

}
