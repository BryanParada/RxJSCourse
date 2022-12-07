import { Component, OnInit } from '@angular/core';
import { of, startWith } from "rxjs";

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
        startWith(0)
    );

    numbers$.subscribe(console.log)

    







   }

}
