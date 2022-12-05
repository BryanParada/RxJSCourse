import { Component, OnInit } from '@angular/core';
import { fromEvent, map, sampleTime } from 'rxjs';

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styles: [
  ]
})
export class SampleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const click$ = fromEvent<PointerEvent>( document, 'click');

    click$.pipe(
      sampleTime(2000), //informacion aparecera cada 2 segundos
      map( ({x,y}) => ({x,y}))
    )
    .subscribe(console.log)











   }
}
