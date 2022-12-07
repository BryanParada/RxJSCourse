import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-ex-randoms',
  templateUrl: './ex-randoms.component.html',
  styles: [
  ]
})
export class ExRandomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){




    (() =>{

      // == NO TOCAR este bloque ====================
      const reloj$ = interval(1000).pipe(
        take(5),
        map( val => Math.round(Math.random() * 100) )
      );
      // No tocar la creación del observable
      // ============================================
    
      const subject$ = new Subject();
      reloj$.subscribe( subject$ );
      
      // Estos dos observables deben de emitir exactamente los mismos valores
      // reloj$.subscribe( val => console.log('obs1', val) );
      // reloj$.subscribe( val => console.log('obs2', val) );
      subject$.subscribe( val => console.log('obs1', val) );
      subject$.subscribe( val => console.log('obs2', val) );
    
    
    
    
    
    })();





   }

}
