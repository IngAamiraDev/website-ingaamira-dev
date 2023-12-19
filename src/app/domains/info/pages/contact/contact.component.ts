import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService, TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private titleService: Title, private translate: TranslateService) {
    this.titleService.setTitle('Contact Me');
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

}
