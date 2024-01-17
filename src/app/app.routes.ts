import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('../app/domains/shared/components/layout/layout.component'),
    //component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../app/domains/info/pages/home/home.component'),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('../app/domains/info/pages/portfolio/portfolio.component'),
      },
      {
        path: 'resume',
        loadComponent: () => import('../app/domains/info/pages/resume/resume.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('../app/domains/info/pages/contact/contact.component'),
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('../app/domains/info/pages/not-found/not-found.component'),
    pathMatch: 'full'
  }

];
