import { Component, OnInit } from '@angular/core';
import { ajax} from 'rxjs/ajax';

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

    // const url = 'https://httpbin.org/delay/1'
    const url = 'https://api.github.com/users?per_page=5'

    const obs$ = ajax.getJSON(  url, {
      //headers
      'Content-Type': 'application/json',
      'my-super-token': 'ABC123'
    } );

    obs$.subscribe(data => console.log('data:', data));

    





   }

}
