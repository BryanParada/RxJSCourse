import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core'; 
import { mergeMap, of, interval, take, map, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styles: [
  ]
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const letters$ = of('a', 'b', 'c');

    letters$.pipe(
      mergeMap( ( letter ) => interval(1000).pipe( 
        map( i => letter + i),
        take(3)
      ))
    )
    // .subscribe({
    //   next: val => console.log('next', val),
    //   complete: () => console.log('Complete')
    // })


    //cuanto tiempo presionando el boton de mouse
    const mouseDown$ = fromEvent(document, 'mousedown');
    const mouseUp$   = fromEvent(document, 'mouseup');
    const interval$  = interval();

    mouseDown$.pipe(
      mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
      ) )
    ).subscribe( console.log)








   }

}
