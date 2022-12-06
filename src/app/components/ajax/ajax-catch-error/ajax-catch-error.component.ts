import { Component, OnInit } from '@angular/core';
import { catchError, map, pluck, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-catch-error',
  templateUrl: './ajax-catch-error.component.html',
  styles: [
  ]
})
export class AjaxCatchErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const url = 'https://api.github.com/XXXusers?per_page=5';

    const handleErrores = ( response: Response) => {
      if (!response.ok){
        throw new EvalError( response.statusText);
      }

      return response;
    }
    
    const catchThisError = (err: AjaxError) =>{ 
        console.warn('Error in:', err.message);
        //return [];
        //return of();
        //return of({});
        return of([]); 
    }

    const fetchPromise = fetch( url );

    // fetchPromise
    //   .then( handleErrores)
    //   .then( resp => resp.json() )
    //   .then( data => console.log('data:', data) )
    //   .catch( err => console.warn('error in users', err))

    ajax( url ).pipe(
       //map( resp => resp.response)
       pluck('response'),
       catchError(catchThisError)
    )
    .subscribe( users => console.log('users', users));




   }

}
