import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';

const routes: Routes = [
  // Setting the landing page.
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },
  { path: 'signIn', component: SignInPageComponent },
  { path: 'community', component: CommunityPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
