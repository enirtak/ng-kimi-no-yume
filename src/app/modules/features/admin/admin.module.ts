import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DictionaryListComponent } from './dictionary-list/dictionary-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DictionaryFormComponent } from './dictionary-form/dictionary-form.component';
import { CatgoryFormComponent } from './catgory-form/catgory-form.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    DictionaryListComponent,
    CategoryListComponent,
    DictionaryFormComponent,
    CatgoryFormComponent,
    // LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
