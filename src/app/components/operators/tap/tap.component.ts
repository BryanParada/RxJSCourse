import { Component, OnInit } from '@angular/core';
import {range} from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styles: [
  ]
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){


      const numbers$ = range(1,5);

      numbers$.pipe(

          tap( x => {
            console.log('antes', x);
            return 100; //<---- return no es necesario!!
          }),
          map( val => val * 10),
          //tap( nombreArgumento => console.log('despues!', nombreArgumento) )
          tap({
            next: value => console.log('despues', value),
            complete: () => console.log('All done')
            
          })

      ).subscribe( val => console.log('subs', val ));









   }

}
