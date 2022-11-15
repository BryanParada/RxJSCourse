import { Component, OnInit } from '@angular/core';
import { of, range, asyncScheduler, observeOn } from "rxjs";

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styles: [
  ]
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    //8const src$ = of(1,2,3,4,5);
    //const src$ = range(1,100);
    //const src$ = range(-5,10); // 10 emisiones!
    const src$ = range(1,5).pipe( observeOn(asyncScheduler) );
    


    console.log('beginning');

    src$.subscribe(console.log);
    console.log('end');
    


   }

}
 