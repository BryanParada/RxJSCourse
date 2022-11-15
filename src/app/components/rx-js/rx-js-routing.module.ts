import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from '../observables/observable/observable.component';
import { UnsubscribeAddComponent } from '../observables/unsubscribe-add/unsubscribe-add.component';
import { HomeComponent } from '../home/home.component';
import { SubjectComponent } from '../observables/subject/subject.component';
import { OfComponent } from '../observables/of/of.component';
import { FromEventComponent } from '../observables/from-event/from-event.component';
import { RangeComponent } from '../observables/range/range.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:
       [ 
         { path:'observable', component: ObservableComponent},
         { path:'unsubscribe', component: UnsubscribeAddComponent},
         { path:'subject', component: SubjectComponent},
         { path:'of', component: OfComponent},
         { path:'fromEvent', component: FromEventComponent},
         { path:'range', component: RangeComponent},
         { path:'**', redirectTo: 'home'},
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
