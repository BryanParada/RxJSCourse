import { Component, OnInit } from '@angular/core';
import { endWith, of, startWith } from "rxjs";

@Component({
  selector: 'app-startwith-endwith',
  templateUrl: './startwith-endwith.component.html',
  styles: [
  ]
})
export class StartwithEndwithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const numbers$ = of(1,2,3).pipe( 
        //startWith(0)
        startWith('a','b','c'),
        endWith('x', 'y','z')
    );

    numbers$.subscribe(console.log)

    







   }

}
