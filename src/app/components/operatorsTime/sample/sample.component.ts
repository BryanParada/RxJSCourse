import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, sample } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [
  ]
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){


    const interval$ = interval(500);
    const click$    = fromEvent(document, 'click');

    interval$.pipe(
      sample( click$)
    )
    .subscribe(console.log)






   }

}
