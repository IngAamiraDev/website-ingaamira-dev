import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { HomeComponent } from './domains/info/pages/home/home.component';
import { PortfolioComponent } from './domains/info/pages/portfolio/portfolio.component';
import { ResumeComponent } from './domains/info/pages/resume/resume.component';
import { ContactComponent } from './domains/info/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {useHash: true} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
