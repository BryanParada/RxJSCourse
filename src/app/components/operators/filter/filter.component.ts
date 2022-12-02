import { Component, OnInit } from '@angular/core';
import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

      // range(1,10).pipe(
      //     filter( val =>val % 2 === 1) 
      // ).subscribe( console.log )


      range(20,30).pipe(
        filter( (val, i) =>{
          console.log('index even', i); 
          return val % 2 === 1
        }) 
    ).subscribe( console.log )

      interface Character {
        type: string,
        name: string
      }

      const characters: Character[] = [
        {
          type: 'hero',
          name: 'Batman'
        },
        {
          type: 'hero',
          name: 'Robin'
        },
        {
          type: 'Villain',
          name: 'Joker'
        }
      ];

      //muestra todos los heroes de un array
      from(characters).pipe(
        filter( p => p.type === 'hero')
      )
      .subscribe(console.log)

        //ENCADENAMIENTO DE OPERADORES
      const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
        map( event => event.code), //recibe keyboardEvent, sale un string (si cambiamos el orden de map y filter tendremos problemas)
        filter( key => key === 'Enter') //recibe string, sale un string
      )

      keyup$.subscribe(console.log);



   }

}
