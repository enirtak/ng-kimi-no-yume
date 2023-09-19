import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDictionaryComponent } from './about-dictionary.component';

const routes: Routes = [{ path: '', component: AboutDictionaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutDictionaryRoutingModule { }
