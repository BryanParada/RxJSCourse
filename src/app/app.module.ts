import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './components/observables/subject/subject.component';
import { OfComponent } from './components/observables/of/of.component';
import { FromEventComponent } from './components/observables/from-event/from-event.component';
import { RangeComponent } from './components/observables/range/range.component';
import { IntervalTimerComponent } from './components/observables/interval-timer/interval-timer.component';
import { AsyncSchedulerComponent } from './components/observables/async-scheduler/async-scheduler.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    OfComponent,
    FromEventComponent,
    RangeComponent,
    IntervalTimerComponent,
    AsyncSchedulerComponent
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
