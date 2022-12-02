import { Component, OnInit } from '@angular/core';
import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

@Component({
  selector: 'app-map-pluck',
  templateUrl: './map-pluck.component.html',
  styles: [
  ]
})
export class MapPluckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

      //  range(1,5).pipe(
      //     map<number,number>( val => {
      //       return val * 10 
      //     }
      //     )
      //  )
      //  .subscribe(console.log )

  //   range(1,5).pipe(
  //     map<number,number>( val => val * 10 )
  //  )
  //  .subscribe(console.log )

//    range(1,5).pipe(
//     map<number,string>( val => (val * 10).toString() )
//  )
//  .subscribe(console.log )

    const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

    const keyupCode$ = keyup$.pipe(
      map( event => event.code)
    )

    const keupPluck$ = keyup$.pipe(
        pluck('target', 'baseURI')
    );

    const keupMapTo$ = keyup$.pipe(
      mapTo('pressed key')
  );

    keyupCode$.subscribe( code => console.log('map ', code)  );
    keupPluck$.subscribe( code => console.log('pluck ', code)  );
    keupMapTo$.subscribe( code => console.log('map ', code)  );

    










   } 

}
