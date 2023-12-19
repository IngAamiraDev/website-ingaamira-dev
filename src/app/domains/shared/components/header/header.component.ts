import { Component } from '@angular/core';

import { TranslateService, TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

}
