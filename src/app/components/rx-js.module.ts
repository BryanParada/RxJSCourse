import { NgModule } from '@angular/core'; 

import { RxJSRoutingModule } from './rx-js-routing.module';
import { MaterialModule } from '../material/material.module';
import { ObservableComponent } from './observables/observable/observable.component';
import { UnsubscribeAddComponent } from './observables/unsubscribe-add/unsubscribe-add.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

import { SubjectComponent } from './observables/subject/subject.component';
import { OfComponent } from './observables/of/of.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { RangeComponent } from './observables/range/range.component';
import { IntervalTimerComponent } from './observables/interval-timer/interval-timer.component';
import { AsyncSchedulerComponent } from './observables/async-scheduler/async-scheduler.component';
import { AdvancedFromComponent } from './observables/advanced-from/advanced-from.component';
import { MapPluckComponent } from './operators/map-pluck/map-pluck.component';
import { FilterComponent } from './operators/filter/filter.component';
import { TapComponent } from './operators/tap/tap.component';
import { MapLabComponent } from './operators/map-lab/map-lab.component';
import { ReduceComponent } from './operators/reduce/reduce.component';
import { ScanComponent } from './operators/scan/scan.component';
import { TakeComponent } from './operators/take/take.component';
import { FirstComponent } from './operators/first/first.component';
import { TakeWhileComponent } from './operators/take-while/take-while.component';
import { TakeUntilComponent } from './operators/take-until/take-until.component';
import { DistinctComponent } from './operators/distinct/distinct.component';
import { DebounceTimeComponent } from './operatorsTime/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './operatorsTime/throttle-time/throttle-time.component';
import { SampleTimeComponent } from './operatorsTime/sample-time/sample-time.component';
import { SampleComponent } from './operatorsTime/sample/sample.component';
import { AuditTimeComponent } from './operatorsTime/audit-time/audit-time.component';
import { AjaxCatchErrorComponent } from './ajax/ajax-catch-error/ajax-catch-error.component';
import { GetJsonComponent } from './ajax/get-json/get-json.component';
import { PutPostDeleteComponent } from './ajax/put-post-delete/put-post-delete.component';
import { MergeAllComponent } from './transformation/merge-all/merge-all.component';
import { MergeMapComponent } from './transformation/merge-map/merge-map.component';
import { SwitchMapComponent } from './transformation/switch-map/switch-map.component';
import { SwitchmapVsMergemapComponent } from './transformation/switchmap-vs-mergemap/switchmap-vs-mergemap.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';
import { ExhaustMapComponent } from './transformation/exhaust-map/exhaust-map.component'; 
import { FlatteningLabComponent } from './transformation/flattening-lab/flattening-lab.component';
import { StartwithEndwithComponent } from './combination/startwith-endwith/startwith-endwith.component';
import { ConcatComponent } from './combination/concat/concat.component';
import { MergeComponent } from './combination/merge/merge.component';
import { CombineLatestComponent } from './combination/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './combination/fork-join/fork-join.component';
import { CapitalizeComponent } from './exercises/capitalize/capitalize.component';
import { ExReduceComponent } from './exercises/ex-reduce/ex-reduce.component';
import { ExRandomsComponent } from './exercises/ex-randoms/ex-randoms.component';
import { ExCountdownComponent } from './exercises/ex-countdown/ex-countdown.component';
import { ExCombineComponent } from './exercises/ex-combine/ex-combine.component';
import { ExLukeComponent } from './exercises/ex-luke/ex-luke.component'; 

@NgModule({
  declarations: [
    ObservableComponent,
    UnsubscribeAddComponent,
    HomeComponent,
    SubjectComponent,
    OfComponent,
    FromEventComponent,
    RangeComponent,
    IntervalTimerComponent,
    AsyncSchedulerComponent,
    AdvancedFromComponent,
    MapPluckComponent,
    FilterComponent,
    TapComponent,
    MapLabComponent,
    ReduceComponent,
    ScanComponent,
    TakeComponent,
    FirstComponent,
    TakeWhileComponent,
    TakeUntilComponent,
    DistinctComponent,
    DebounceTimeComponent,
    ThrottleTimeComponent,
    SampleTimeComponent,
    SampleComponent,
    AuditTimeComponent,
    AjaxCatchErrorComponent,
    GetJsonComponent,
    PutPostDeleteComponent,
    MergeAllComponent,
    MergeMapComponent,
    SwitchMapComponent,
    SwitchmapVsMergemapComponent,
    ConcatMapComponent,
    ExhaustMapComponent, 
    FlatteningLabComponent,
    StartwithEndwithComponent,
    ConcatComponent, 
    MergeComponent,
    CombineLatestComponent,
    ForkJoinComponent, 
    CapitalizeComponent, ExReduceComponent, ExRandomsComponent, ExCountdownComponent, ExCombineComponent, ExLukeComponent 
  ],
  imports: [ 
    RxJSRoutingModule,
    MaterialModule,
    CommonModule
  ]
})
export class RxJSModule { }
