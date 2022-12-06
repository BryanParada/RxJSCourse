import { Component, OnInit } from '@angular/core'; 
import { interval, take, fromEvent, switchMap, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styles: [
  ]
})
export class ConcatMapComponent implements OnInit {

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
      concatMap( () => interval$)

    ).subscribe( console.log)







   }

}
