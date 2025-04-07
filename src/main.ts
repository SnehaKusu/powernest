import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, withComponentInputBinding, withHashLocation } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';  
import { ScrollService } from './app/services/scroll.service';  
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './app/pages/home/home.component';
import { AboutUsComponent } from './app/pages/about-us/about-us.component';
import { SolutionsComponent } from './app/pages/solutions/solutions.component';
import { ServicesComponent } from './app/pages/services/services.component';
import { ResourcesComponent } from './app/pages/resources/resources.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { BusinessDevelopmentComponent } from './app/pages/solutions/business-development/business-development.component';
import { FundraisingServicesComponent } from './app/pages/resources/fundraising-services.component';
import { TalentOptimizationServicesComponent } from './app/pages/resources/talent-optimization-services.component';
import { PartnershipsComponent } from './app/partnerships/partnerships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'about-us', component: AboutUsComponent },

  { 
    path: 'solutions', 
    component: SolutionsComponent, 
    children: [
      { path: 'business-development', component: BusinessDevelopmentComponent },
      { 
        path: 'core-hr-solutions', 
        loadComponent: () => import('./app/pages/solutions/core-hr-solutions/core-hr-solutions.component')
          .then(m => m.CoreHrSolutionsComponent) 
      }
    ]
  },

  { path: 'services', component: ServicesComponent },
  { 
    path: 'services/comprehensive-services', 
    loadComponent: () => import('./app/pages/services/comprehensive-services/comprehensive-services.component')
      .then(m => m.ComprehensiveServicesComponent) 
  },
  { 
    path: 'services/strategic-advisory', 
    loadComponent: () => import('./app/pages/services/strategic-advisory/strategic-advisory.component')
      .then(m => m.StrategicAdvisoryComponent) 
  },
  { 
    path: 'services/psychological-services', 
    loadComponent: () => import('./app/pages/services/psychological-services/psychological-services.component')
      .then(m => m.PsychologicalServicesComponent) 
  },

  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'resources/fundraising-services', component: FundraisingServicesComponent },
  { path: 'resources/talent-optimization-services', component: TalentOptimizationServicesComponent },

  { path: 'partnerships', component: PartnershipsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes, 
      withComponentInputBinding(),
      withHashLocation()
    ),
    ScrollService  , provideHttpClient()
  ]
}).catch(err => console.error(err));
