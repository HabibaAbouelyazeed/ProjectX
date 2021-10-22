import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { FilterComponent } from './layout/filter/filter.component';
import { CardsComponent } from './layout/cards/cards.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'signIn', component: SignInPageComponent},
  {path: 'community', component: FilterComponent},
  {path: 'home', component: HomePageComponent},
  // {path: 'community', component: CardsComponent},
  //{path: '', redirectTo: '/heroes-list', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
