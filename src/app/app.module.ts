import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './components/observables/subject/subject.component';
import { OfComponent } from './components/observables/of/of.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    OfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
