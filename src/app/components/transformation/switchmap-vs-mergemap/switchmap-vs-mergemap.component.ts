import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap-vs-mergemap',
  templateUrl: './switchmap-vs-mergemap.component.html',
  styles: [
  ]
})
export class SwitchmapVsMergemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const click$ = fromEvent( document, 'click');
    const interval$ = interval(1000);

    click$.pipe(
      switchMap( () => interval$),
      // mergeMap( () => interval$)
    ).subscribe(console.log)







   }

}
