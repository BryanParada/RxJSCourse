import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { from, reduce, scan, map } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styles: [
  ]
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){




    const numbers = [1,2,3,4,5];

    // const totalAcumulator = (acc, cur) => {
    //   return acc + cur;
    // }

    const totalAcumulator = (acc: number, cur: number) => acc + cur; 

    //Reduce
    from(numbers).pipe(
      reduce(totalAcumulator, 0)
    )
    .subscribe(console.log)

    //Scan
    from(numbers).pipe(
      scan(totalAcumulator, 0)
    )
    .subscribe(console.log)

    // Redux 
    interface Usuario {
      id: string,
      autenticado: boolean,
      token?: string,
      edad?: number
    }
    const user: Usuario[] = [
      { id: 'bry', autenticado: false, token: 'null' },
      { id: 'bry', autenticado: true, token: 'ABC' },
      { id: 'bry', autenticado: true, token: 'ABC123' }
    ]

    const state$ = from( user ).pipe(
      scan<Usuario, Usuario>(( acc: Usuario, cur: Usuario ) => {
        return { ...acc, ...cur }
      }, user[0])
    )

    const id$  = state$.pipe(
      pluck('id')
    )

    id$.subscribe(console.log)

   }

}
