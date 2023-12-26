import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TranslateModule} from '@ngx-translate/core';

import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, CommonModule, TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isSectorExperienceOpen: boolean = false;
  isEducationOpen:boolean = false;
  isSkillsSdOpen: boolean = false;
  isSkillsDeOpen: boolean = false;
  isLanguagesOpen: boolean = false;

  constructor (
    private titleService: Title,
    private renderer: Renderer2,
    private translationService:
    TranslationService
  ) {
    this.titleService.setTitle('Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', this.translationService.getPdfPath());
    //link.setAttribute('download','CV_Dev.pdf');
    link.click();
    link.remove();
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
