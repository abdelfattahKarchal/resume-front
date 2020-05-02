import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { SlideOutComponent } from './components/slide-out/slide-out.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

// HttpClientModule sert pour communiquer avec des requetes http
import { HttpClientModule } from '@angular/common/http';
  //import { from } from 'rxjs';

const appRoutes : Routes=[
  { path: '' , component : HomeComponent},
  { path: 'about' , component : AboutComponent},
  { path: 'skill' , component : SkillComponent},
  { path: 'experience' , component : ExperienceComponent},
  { path: 'education' , component : EducationComponent},
  { path: 'contact' , component : ContactComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    SlideOutComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "",
      animationDuration: 300
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},

],
  bootstrap: [AppComponent]
})
export class AppModule { }
