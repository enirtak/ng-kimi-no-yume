import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutDictionaryRoutingModule } from './about-dictionary-routing.module';
import { AboutDictionaryComponent } from './about-dictionary.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AboutDictionaryComponent
  ],
  imports: [
    CommonModule,
    AboutDictionaryRoutingModule,
    SharedModule
  ]
})
export class AboutDictionaryModule { }
