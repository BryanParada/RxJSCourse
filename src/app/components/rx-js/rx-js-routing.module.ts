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
import { TakeWhileComponent } from '../operators/take-while/take-while.component';
import { TakeUntilComponent } from '../operators/take-until/take-until.component';
import { DistinctComponent } from '../operators/distinct/distinct.component'; 
import { DebounceTimeComponent } from '../operatorsTime/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from '../operatorsTime/throttle-time/throttle-time.component';
import { SampleTimeComponent } from '../operatorsTime/sample-time/sample-time.component';
import { SampleComponent } from '../operatorsTime/sample/sample.component';
import { AuditTimeComponent } from '../operatorsTime/audit-time/audit-time.component';
import { AjaxCatchErrorComponent } from '../ajax/ajax-catch-error/ajax-catch-error.component';
import { GetJsonComponent } from '../ajax/get-json/get-json.component';
import { PutPostDeleteComponent } from '../ajax/put-post-delete/put-post-delete.component';
import { MergeAllComponent } from '../transformation/merge-all/merge-all.component';
import { MergeMapComponent } from '../transformation/merge-map/merge-map.component';

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
         { path:'take-while', component: TakeWhileComponent}, 
         { path:'take-until', component: TakeUntilComponent}, 
         { path:'distinct', component: DistinctComponent}, 
         //OPERADORES TIEMPO
         { path:'debounce-time', component: DebounceTimeComponent}, 
         { path:'throttle-time', component: ThrottleTimeComponent}, 
         { path:'sample-time', component: SampleTimeComponent}, 
         { path:'sample', component: SampleComponent}, 
         { path:'audit-time', component: AuditTimeComponent}, 
         //AJAX
         { path:'ajax-catch-error', component: AjaxCatchErrorComponent}, 
         { path:'get-json', component: GetJsonComponent}, 
         { path:'put-post-delete', component: PutPostDeleteComponent}, 
         //TRANSFORMACION
         { path:'merge-all', component: MergeAllComponent}, 
         { path:'merge-map', component: MergeMapComponent}, 


         { path:'**', redirectTo: 'home'},
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
