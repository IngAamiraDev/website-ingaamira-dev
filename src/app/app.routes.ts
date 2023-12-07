import { Routes } from '@angular/router';

import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { HomeComponent } from './domains/info/pages/home/home.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { PortfolioComponent } from './domains/info/pages/portfolio/portfolio.component';
import { ResumeComponent } from './domains/info/pages/resume/resume.component';
import { ContactComponent } from './domains/info/pages/contact/contact.component';

export const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
            path: 'portfolio',
            component: PortfolioComponent
        },
        {
          path: 'resume',
          component: ResumeComponent
        },
        {
          path: 'contact',
          component: ContactComponent
        },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent, pathMatch: 'full'
  }
];
