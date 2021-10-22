import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  // Setting the landing page.

  { path: 'home', component: HomePageComponent },
  { path: 'community', component: CommunityPageComponent },
  { path: 'signIn', component: SignInPageComponent },
  { path: 'register', component: SignUpPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
