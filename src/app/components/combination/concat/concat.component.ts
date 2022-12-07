import { Component, OnInit } from '@angular/core';
import { interval, concat, take, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styles: [
  ]
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const interval$ = interval(1000);

    concat(
      interval$.pipe( take(3)),
      interval$.pipe( take(2)),
      //[1,2,3,4]
      // of(1)
      ).subscribe( console.log )







   }

}
