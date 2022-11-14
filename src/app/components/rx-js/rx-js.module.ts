import { NgModule } from '@angular/core'; 

import { RxJSRoutingModule } from './rx-js-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ObservableComponent } from '../observables/observable/observable.component';
import { UnsubscribeAddComponent } from '../observables/unsubscribe-add/unsubscribe-add.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ObservableComponent,
    UnsubscribeAddComponent,
    HomeComponent
  ],
  imports: [ 
    RxJSRoutingModule,
    MaterialModule,
    CommonModule
  ]
})
export class RxJSModule { }
