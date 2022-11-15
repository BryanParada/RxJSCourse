import { Component, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styles: [
  ]
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    const src1$ = fromEvent<PointerEvent>( document, 'click');
    const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

    const observer = {
      next: (val: any) => console.log('next', val)
      
    }
    //============1
    // src1$.subscribe(observer);
    //============2
    //  src1$.subscribe(ev => {
    //   console.log(ev.x);
    //   console.log(ev.y);
      
    // });
    //============3
    src1$.subscribe( ({x,y}) => {
        console.log(x,y); 
    });

    src2$.subscribe(event => {
      console.log(event.key);
    });

   }

}
