import { Component, OnInit } from '@angular/core';
import { of, take, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styles: [
  ]
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){


    const numbers$ = of(1,2,3,4,5)
          //.pipe( tap(console.log));

    numbers$.pipe(
      //tap( console.log),
      tap( t => console.log('tap', t)),
      take(3) //cantidad de emisiones
    )
    .subscribe({
      next: val => console.log('next:', val), //valor que recibimos
      complete: () => console.log('complete') //no recibe arg
    })








   }

}
