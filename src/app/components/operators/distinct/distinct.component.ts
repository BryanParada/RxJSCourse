import { Component, OnInit } from '@angular/core'; 
import { from, distinctUntilChanged, distinct, distinctUntilKeyChanged, of } from 'rxjs';

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

      console.log('-------');
        
      numbers$.pipe(
        distinctUntilChanged() //solo evita repetir valores seguidos, ej 1,1,1 = 1 - pero si 1,'1',1 = 1,'1',1
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
        {name: 'Megaman'},
        {name: 'Zero'},
      ];

      from( characters).pipe(
        //distinct( p => p.name)
        //distinctUntilChanged( (ant, act) => ant.name === act.name)
        distinctUntilKeyChanged('name')
      ).subscribe(console.log)


   }

}
