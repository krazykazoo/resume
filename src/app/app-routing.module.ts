import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {
    path: 'resume',
    pathMatch: 'full',
    component: ResumeComponent
  },
  {
    pathMatch: 'full',
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}