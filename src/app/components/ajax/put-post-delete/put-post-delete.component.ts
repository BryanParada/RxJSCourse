import { Component, OnInit } from '@angular/core';
import { ajax, AjaxError } from 'rxjs/ajax';

@Component({
  selector: 'app-put-post-delete',
  templateUrl: './put-post-delete.component.html',
  styles: [
  ]
})
export class PutPostDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const url = 'https://httpbin.org/delay/1'
    // //POST
    //   ajax.post(url, {
    //       id: 1,
    //       name: 'bryan'
    //   }, {
    //     'myToken': 'abc123'
    //   }).subscribe(console.log)
    // //PUT
    //   ajax.put(url, {
    //     id: 1,
    //     name: 'bryan'
    // }, {
    //   'myToken': 'abc123'
    // }).subscribe(console.log)

    ajax({
      url,  //url: url
      method: 'POST', // PUT
      headers: {
        'my-token': 'ABC123'
      },
      body: {
        id: 1,
        name: 'bryan'
      }
    }).subscribe(console.log)


   }

}
