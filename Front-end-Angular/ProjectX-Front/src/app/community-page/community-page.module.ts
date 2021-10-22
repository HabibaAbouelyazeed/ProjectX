import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';




@NgModule({
  declarations: [
    FilterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    FilterComponent,
    CardsComponent
  ]
})
export class CommunityPageModule { }
