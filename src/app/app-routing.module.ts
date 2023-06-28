import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { LoginComponent } from './modules/features/admin/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'search', 
    loadChildren: () => 
      import('./modules/features/search/search.module').then(m => m.SearchModule) 
  },
  { 
    path: 'list', 
    loadChildren: () => 
      import('./modules/features/list/list.module').then(m => m.ListModule) 
  },
  {
    path: 'auth', 
    canLoad: [AuthGuardService],
    loadChildren: () => 
      import('./modules/features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
