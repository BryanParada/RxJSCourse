import { Component, OnInit } from '@angular/core';
import { fromEvent, take, first, tap, map } from 'rxjs';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){


    // const click$ = fromEvent<PointerEvent>( document, 'click');

    // click$.pipe(
    //   tap( ()=> console.log('tap')), // este tap no es la emision del subscribe
    //   //take(1) // lo mismo que first()
    //   first<PointerEvent>( event => event.clientY >= 150)
    // )
    // .subscribe( {
    //   next: val => console.log('next', val),
    //   complete: () => console.log('complete')
    // } );

    const click2$ = fromEvent<PointerEvent>( document, 'click');

    click2$.pipe(
      tap<PointerEvent>( console.log),
      // map( event => ({
      //   clientY: event.clientY,
      //   clientX: event.clientX
      // }))
      map( ({ clientX, clientY}) => ({ clientY, clientX })),
      first( event => event.clientY >= 150)
    )
    .subscribe( {
      next: val => console.log('next', val),
      complete: () => console.log('complete')
    } );








   }

}
