import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemHeader } from '../../../shared/interfaces/menu-item';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor( private translationService: TranslationService ) {}

  public menuItemsHeader = signal<MenuItemHeader[]> ([
    { flag: 'USA Flag',   img: '../../../../../assets/icons/usa.png',   event: () => this.changeLanguage('en') },
    { flag: 'Spain Flag', img: '../../../../../assets/icons/spain.png', event: () => this.changeLanguage('es') },
  ]);

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
