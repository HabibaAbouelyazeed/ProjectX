import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CardsComponent } from './cards/cards.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FilterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    FilterComponent,
    CardsComponent
  ]
})
export class LayoutModule { }
