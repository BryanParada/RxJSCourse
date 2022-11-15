import { Component, OnInit } from '@angular/core';
import { interval, Observer, timer } from "rxjs";

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styles: [
  ]
})
export class IntervalTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    const observer: Observer<any> = {
      next: val => console.log('[Next]: ', val),
      error: error => console.warn('[Error]', error),
      complete: () => console.info('[Observer Completed!]')
    }

    const todayIn5 = new Date(); //ahora!
    todayIn5.setSeconds( todayIn5.getSeconds() + 5);

    const interval$ = interval(1000);
    // const timer$    = timer(2000, 3000); //inicia a los 2 seg, se ejecuta cada 3 seg
    const timer$    = timer(todayIn5);

    console.log('=====Beginning====='); 
    //interval$.subscribe(observer);
    timer$.subscribe(observer);
    console.log('========End========');

   }

}
