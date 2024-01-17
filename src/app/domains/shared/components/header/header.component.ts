import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemHeader } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  getUsa: string = '';
  getSpain: string = '';

  public menuItemsHeader = signal<MenuItemHeader[]> ([
    { flag: 'USA Flag',   img: '../../../../../assets/icons/usa.png',   event: () => '' },
    { flag: 'Spain Flag', img: '../../../../../assets/icons/spain.png', event: () => '' },
  ]);

}
