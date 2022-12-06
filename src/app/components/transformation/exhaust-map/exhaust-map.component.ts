import { Component, OnInit } from '@angular/core'; 
import { interval, take, fromEvent, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styles: [
  ]
})
export class ExhaustMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){



    const interval$ = interval(500).pipe( take(3));
    const click$    = fromEvent(document, 'click')

    click$.pipe(
      exhaustMap( () => interval$)

    ).subscribe( console.log)







   }

}
