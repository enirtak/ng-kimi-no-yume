import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/features/admin/login/login.component';
import { HomeDictionaryComponent } from './modules/features/home-dictionary/home-dictionary.component';

const routes: Routes = [
  { 
    path: '', 
    title: 'KimiNoYume - Your Dream',
    children: [
      { 
        path: '', 
        title: 'KimiNoYume - Home',
        component: HomeDictionaryComponent,
        pathMatch: 'full'
      },
      { 
        path: 'search', 
        title: 'KimiNoYume - Search',
        loadChildren: () => 
          import('./modules/features/search/search.module').then(m => m.SearchModule) 
      },  
      { 
        path: 'list', 
        title: 'KimiNoYume - Dream List',
        loadChildren: () => 
          import('./modules/features/list/list.module').then(m => m.ListModule) 
      },  
      { 
        path: 'about', 
        title: 'KimiNoYume - About',
        loadChildren: () => 
          import('./modules/features/about-dictionary/about-dictionary.module').then(m => m.AboutDictionaryModule) 
      }
    ]
  },
  { 
    path: 'contact-me', 
    title: 'Welcome',
    component: HomeComponent
  },
  { 
    path: 'login', 
    title: 'Login',
    component: LoginComponent
  },
  { 
    path: 'shiigoto', 
    title: 'shIIgoto - Job Application Tracker',
    loadChildren: () => 
      import('./modules/features/job-app-tracker/job-app-tracker.module').then(m => m.JobAppTrackerModule) 
    },
  {
    path: 'admin', 
    title: 'Admin',
    // canLoad: [AuthGuardService],
    loadChildren: () => 
      import('./modules/features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
