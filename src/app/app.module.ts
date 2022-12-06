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
import { AdvancedFromComponent } from './components/observables/advanced-from/advanced-from.component';
import { MapPluckComponent } from './components/operators/map-pluck/map-pluck.component';
import { FilterComponent } from './components/operators/filter/filter.component';
import { TapComponent } from './components/operators/tap/tap.component';
import { MapLabComponent } from './components/operators/map-lab/map-lab.component';
import { ReduceComponent } from './components/operators/reduce/reduce.component';
import { ScanComponent } from './components/operators/scan/scan.component';
import { TakeComponent } from './components/operators/take/take.component';
import { FirstComponent } from './components/operators/first/first.component';
import { TakeWhileComponent } from './components/operators/take-while/take-while.component';
import { TakeUntilComponent } from './components/operators/take-until/take-until.component';
import { DistinctComponent } from './components/operators/distinct/distinct.component';
import { DebounceTimeComponent } from './components/operatorsTime/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './components/operatorsTime/throttle-time/throttle-time.component';
import { SampleTimeComponent } from './components/operatorsTime/sample-time/sample-time.component';
import { SampleComponent } from './components/operatorsTime/sample/sample.component';
import { AuditTimeComponent } from './components/operatorsTime/audit-time/audit-time.component';
import { AjaxCatchErrorComponent } from './components/ajax/ajax-catch-error/ajax-catch-error.component';
import { GetJsonComponent } from './components/ajax/get-json/get-json.component';
import { PutPostDeleteComponent } from './components/ajax/put-post-delete/put-post-delete.component';
import { MergeAllComponent } from './components/transformation/merge-all/merge-all.component';
import { MergeMapComponent } from './components/transformation/merge-map/merge-map.component';
import { SwitchMapComponent } from './components/transformation/switch-map/switch-map.component';
import { SwitchmapVsMergemapComponent } from './components/transformation/switchmap-vs-mergemap/switchmap-vs-mergemap.component';
import { ConcatMapComponent } from './components/transformation/concat-map/concat-map.component';
import { ExhaustMapComponent } from './components/transformation/exhaust-map/exhaust-map.component';
import { FlatteningLabComponent } from './components/transformation/flattening-lab/flattening-lab.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
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
    FlatteningLabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
