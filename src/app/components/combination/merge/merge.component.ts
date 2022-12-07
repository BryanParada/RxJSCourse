import { Component, OnInit } from '@angular/core';
import { fromEvent, merge, pluck } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styles: [
  ]
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const keyup$ = fromEvent( document, 'keyup');
    const click$ = fromEvent( document, 'click');

    merge( keyup$.pipe( pluck('type')),
           click$.pipe( pluck('type'))).subscribe(console.log);






   }

}
