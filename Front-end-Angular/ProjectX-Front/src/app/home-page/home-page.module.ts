import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AboutComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    AboutComponent,
    ActivitiesComponent
  ]
})
export class HomePageModule { }
