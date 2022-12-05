import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from '../observables/observable/observable.component';
import { UnsubscribeAddComponent } from '../observables/unsubscribe-add/unsubscribe-add.component';
import { HomeComponent } from '../home/home.component';
import { SubjectComponent } from '../observables/subject/subject.component';
import { OfComponent } from '../observables/of/of.component';
import { FromEventComponent } from '../observables/from-event/from-event.component';
import { RangeComponent } from '../observables/range/range.component';
import { IntervalTimerComponent } from '../observables/interval-timer/interval-timer.component';
import { AsyncSchedulerComponent } from '../observables/async-scheduler/async-scheduler.component';
import { AdvancedFromComponent } from '../observables/advanced-from/advanced-from.component';
import { MapPluckComponent } from '../operators/map-pluck/map-pluck.component';
import { FilterComponent } from '../operators/filter/filter.component';
import { TapComponent } from '../operators/tap/tap.component';
import { MapLabComponent } from '../operators/map-lab/map-lab.component';
import { ReduceComponent } from '../operators/reduce/reduce.component';
import { ScanComponent } from '../operators/scan/scan.component';
import { TakeComponent } from '../operators/take/take.component';
import { FirstComponent } from '../operators/first/first.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:
       [ 
        //OBSERVABLES
         { path:'observable', component: ObservableComponent},
         { path:'unsubscribe', component: UnsubscribeAddComponent},
         { path:'subject', component: SubjectComponent},
         { path:'of', component: OfComponent},
         { path:'fromEvent', component: FromEventComponent},
         { path:'range', component: RangeComponent},
         { path:'interval-timer', component: IntervalTimerComponent},
         { path:'async-scheduler', component: AsyncSchedulerComponent},
         { path:'advanced-from', component: AdvancedFromComponent},
        //OPERADORES
         { path:'map-pluck', component: MapPluckComponent},
         { path:'filter', component: FilterComponent},
         { path:'tap', component: TapComponent},
         { path:'map-lab', component: MapLabComponent},
         { path:'reduce', component: ReduceComponent},
         { path:'scan', component: ScanComponent}, 
         { path:'take', component: TakeComponent}, 
         { path:'first', component: FirstComponent}, 

         { path:'**', redirectTo: 'home'},
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
