import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styles: [
  ]
})
export class GetJsonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const url = 'https://httpbinXXX.org/delay/1'
    //const url = 'https://api.github.com/users?per_page=5'

    const handleError = (resp: AjaxError) => {
      console.warn('error', resp.message);
      return of({
        ok:false,
        users: []
      })
    }

    // const obs$ = ajax.getJSON(  url, {
    //   //headers
    //   'Content-Type': 'application/json',
    //   'my-super-token': 'ABC123'
    // } );

    // const obs$  = ajax.getJSON( url ).pipe(
    //   catchError(handleError)
    // );
    // const obs2$ = ajax( url ).pipe(
    //   catchError(handleError)
    // );

    const obs$  = ajax.getJSON( url );
    const obs2$ = ajax( url );
    
    //obs$.subscribe(data => console.log('getJson:', data));
    //obs2$.subscribe(data => console.log('ajax:', data));
    
    obs$.pipe(
      catchError(handleError)
    )
    .subscribe({
      next: val => console.log('next', val),
      error: err => console.log('error en subs:', err),
      complete: () => console.log('complete'),
           
      
    });
    





   }

}
