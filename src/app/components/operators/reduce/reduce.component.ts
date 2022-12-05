import { Component, OnInit } from '@angular/core';
import { interval, take, reduce, tap} from 'rxjs';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styles: [
  ]
})
export class ReduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    const numbers = [1,2,3,4,5];

    const totalReducer = (acumulator: number, actualValue: number) =>{
      return acumulator + actualValue;
    }

    const total = numbers.reduce( totalReducer, 0 ); // 0 valor inicial
    console.log('total arr', total);
    
    interval(500).pipe(
      //take: va a completar el observable despues de la cantidad de veces que yo especifique dentro de él
      take(6), //0+1+2+3+4+5
      tap(console.log),
      reduce( totalReducer) // al agregar reduce no pasara nada hasta que se complete (comentar linea para ver efecto)
    )
    .subscribe({
      next: val => console.log('next', val),
      complete: () => console.log('Complete')
    })







   }

}
