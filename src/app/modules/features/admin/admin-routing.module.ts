import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { DictionaryListComponent } from './dictionary-list/dictionary-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { 
        path: 'profile', 
        component: ProfileComponent 
      },
      { 
        path: 'dictionary-list', 
        component: DictionaryListComponent 
      },
      { 
        path: 'category-list', 
        component: CategoryListComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
