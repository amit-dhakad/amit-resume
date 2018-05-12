import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'awards', component: AwardsComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'interests',      component: InterestsComponent },
  { path: 'skills',      component: SkillsComponent },
  { path: 'about',      component: AboutComponent },
  { path: '',  redirectTo: '/about', pathMatch: 'full'  },
  { path: '**',  redirectTo: '/about', pathMatch: 'full'  }
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
