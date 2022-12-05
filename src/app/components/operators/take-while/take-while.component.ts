import { Component, OnInit } from '@angular/core';
import { fromEvent, map, tap, takeWhile} from 'rxjs';


@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styles: [
  ]
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    const click$ = fromEvent<PointerEvent>(document, 'click');

    click$.pipe(
      // tap( console.log),
      map( ({x,y}) => ({x,y})),
      //takeWhile( ({x,y}) => y <= 150 )
      takeWhile( ({x,y}) => y <= 150, true ) //inclusive: true (para mostrar el ultimo valor)

    ).subscribe({
      next: val => console.log('next:', val),
      complete: () => console.log('complete'),
    })







   }

}
