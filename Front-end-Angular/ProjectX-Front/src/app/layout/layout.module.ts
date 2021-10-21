import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CardsComponent } from './cards/cards.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    FilterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    FilterComponent,
    CardsComponent
  ]
})
export class LayoutModule { }
