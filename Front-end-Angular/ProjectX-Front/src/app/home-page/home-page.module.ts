import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    AboutComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ActivitiesComponent
  ]
})
export class HomePageModule { }
