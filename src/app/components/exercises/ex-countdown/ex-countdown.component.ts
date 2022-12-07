import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Component({
  selector: 'app-ex-countdown',
  templateUrl: './ex-countdown.component.html',
  styles: [
  ]
})
export class ExCountdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){



/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

  const inicio = 7;
  const countdown$ = interval(700).pipe(
      // Usar los operadores necesarios
      // para realizar la cuenta regresiva
     map( i => inicio - i),
     take(inicio+1)

  );
  

  // No tocar esta línea ==================
  countdown$.subscribe( console.log ); // =
  // ======================================


})();





   }

}
