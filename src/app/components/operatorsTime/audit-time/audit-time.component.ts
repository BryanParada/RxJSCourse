import { Component, OnInit } from '@angular/core';
import { fromEvent, auditTime, tap, map } from 'rxjs';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styles: [
  ]
})
export class AuditTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){


    const click$ = fromEvent<PointerEvent>(document, 'click')

    click$.pipe(
      map( ({x}) => x),
      tap(val => console.log('tap', val)),
      auditTime(2000)
    ).subscribe( console.log)





   }

}
