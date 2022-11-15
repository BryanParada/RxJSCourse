import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject} from 'rxjs';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }
 
   initComponent(){

    const observer: Observer<any> = {
      next: value => console.log('[Next]: ', value),
      error: error => console.warn('[Error]', error),
      complete: () => console.info('[Completed!]')
    };

    const intervalo$ = new Observable<number>( subs => {

      const intervalID = setInterval( 
        () => subs.next( Math.random() ), 1000
        );

        return () => clearInterval( intervalID );

    });

    // 1- Casteo múltiple
    // 2- Tambien es un observer
    // 3- maneja next, error y complete

    const subject$ = new Subject();
    intervalo$.subscribe( subject$ );

    const subs1 = intervalo$.subscribe( rnd => console.log('subs1 without subject', rnd) );
    const subs2 = intervalo$.subscribe( rnd => console.log('subs2 without subject', rnd) );

    const subsSubj1 = subject$.subscribe( rnd => console.log('subs1 with subject', rnd) );
    const subsSubj2 = subject$.subscribe( rnd => console.log('subs2 with subject', rnd) );



   }

}
