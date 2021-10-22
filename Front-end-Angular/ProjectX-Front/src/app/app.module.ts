import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { CommunityPageComponent } from './community-page/community-page.component';
import { CommunityPageModule } from './community-page/community-page.module';
import { FooterComponent } from './footer/footer.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    HeaderComponent,
    HomePageComponent,
    CommunityPageComponent,
    FooterComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    CommunityPageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
