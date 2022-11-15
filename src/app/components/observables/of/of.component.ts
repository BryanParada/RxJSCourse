import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styles: [
  ]
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    // const obs$ = of(1,2,3,4,5,6);
    // const obs$ = of<number>(...[1,2,3,4,5,6]);
    const obs$ = of<any>( [1,2], {a:1, b:3}, function(){}, true, Promise.resolve(true));

    console.log('Init Obs$');
    
    obs$.subscribe({
      next: (value) => { console.log('next', value) },
      error: () => { null },
      complete: () => console.log('Sequence done')
    });

    console.log('End Obs$');




   }

}
