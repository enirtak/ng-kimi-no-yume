import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAppTrackerComponent } from './job-app-tracker.component';

// https://www.tektutorialshub.com/angular/activatedroute-in-angular/
// https://www.tutorialspoint.com/angular8/angular8_routing_and_navigation.htm
const routes: Routes = [
  { 
    path: '', 
    component: JobAppTrackerComponent,
    children: [
      // {
      //   path: 'job-application',
      //   children: [
      //     {
      //       path: ':id'
      //     },
          
      //     {
      //       path: ':id/edit'
      //     }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAppTrackerRoutingModule { }
