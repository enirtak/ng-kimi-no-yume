import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobAppTrackerRoutingModule } from './job-app-tracker-routing.module';
import { JobAppTrackerComponent } from './job-app-tracker.component';


@NgModule({
  declarations: [
    JobAppTrackerComponent
  ],
  imports: [
    CommonModule,
    JobAppTrackerRoutingModule
  ]
})
export class JobAppTrackerModule { }
