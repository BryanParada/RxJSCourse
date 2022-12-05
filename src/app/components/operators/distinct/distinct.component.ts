import { Component, OnInit } from '@angular/core'; 
import { from, map, tap, takeWhile, interval, takeUntil, distinct, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styles: [
  ]
})
export class DistinctComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

      const numbers$ = of<any>(1,'1',1,3,3,2,2,4,4,5,3,1)

      numbers$.pipe(
        distinct() //evita repetir valores - dejara pasar valores que ya hayan sido emitidos
      ).subscribe(console.log); 

      interface Character {
        name: string;
      }

      const characters: Character[] = [
        {name: 'Megaman'},
        {name: 'X'},
        {name: 'Dr. Wahwee'},
        {name: 'Zero'},
        {name: 'Zero'},
        {name: 'Zero'},
        {name: 'Zero'},
      ];

      from( characters).pipe(
        distinct( p => p.name)
      ).subscribe(console.log)


   }

}
