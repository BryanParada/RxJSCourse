import { Component, OnInit } from '@angular/core';
import { from, reduce } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-ex-reduce',
  templateUrl: './ex-reduce.component.html',
  styles: [
  ]
})
export class ExReduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){



    /**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  const totalReducer = (acumulator: number, actualValue: number) =>{
    return acumulator + actualValue;
  }

  from(datos).pipe(
   filter<any>(d => !isNaN( d ) ),
    //reduce(totalReducer)
    reduce(( acc, curr) => acc + curr)

  ).subscribe( console.log ) // La salida debe de ser 32



})();







   }

}
