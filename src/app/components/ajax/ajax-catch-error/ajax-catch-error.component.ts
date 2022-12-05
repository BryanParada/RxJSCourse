import { Component, OnInit } from '@angular/core';

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

    const url = 'https://api.github.com/usersx?per_page=5';

    const handleErrores = ( response: Response) => {
      if (!response.ok){
        throw new EvalError( response.statusText);
      }

      return response;
    }

    const fetchPromise = fetch( url );

    fetchPromise
      .then( handleErrores)
      .then( resp => resp.json() )
      .then( data => console.log('data:', data) )
      .catch( err => console.warn('error in users', err))






   }

}
