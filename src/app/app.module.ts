import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { UnsubscribeAddComponent } from './components/observables/unsubscribe-add/unsubscribe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    UnsubscribeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
