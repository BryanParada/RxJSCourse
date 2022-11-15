import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from '../observables/observable/observable.component';
import { UnsubscribeAddComponent } from '../observables/unsubscribe-add/unsubscribe-add.component';
import { HomeComponent } from '../home/home.component';
import { SubjectComponent } from '../observables/subject/subject.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:
       [ 
         { path:'observable', component: ObservableComponent},
         { path:'unsubscribe', component: UnsubscribeAddComponent},
         { path:'subject', component: SubjectComponent},
         { path:'**', redirectTo: 'home'},
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
