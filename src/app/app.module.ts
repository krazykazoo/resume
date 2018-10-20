import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialImportModule } from './material-import/material-import.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResumeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
