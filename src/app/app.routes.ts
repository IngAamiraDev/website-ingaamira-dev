import { Routes } from '@angular/router';

import { AboutComponent } from './domains/info/pages/about/about.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { NotFoundComponent  } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        {
            path: '',
            component: AboutComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
