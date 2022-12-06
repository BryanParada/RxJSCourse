import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core'; 
import { ajax, AjaxError } from 'rxjs/ajax';
import { fromEvent, debounceTime, map, pluck } from 'rxjs';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styles: [
  ]
})
export class MergeAllComponent implements OnInit {

  @ViewChild('divMa') divMa!: ElementRef;  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

      const textInput = document.createElement('input');
      const orderList = document.createElement('ol');

      this.renderer.appendChild(this.divMa.nativeElement, textInput)
      this.renderer.appendChild(this.divMa.nativeElement, orderList)
      
     //Streams
     const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

     input$.pipe(
      debounceTime(500),
      map( event =>{
        const text = (<HTMLInputElement>event.target).value //event.target['value'];
       

        return ajax.getJSON(
          `https://api.github.com/users/${text}`
        )
      })
     ).subscribe( resp => {
        resp.pipe(
          pluck('url')
        )
        .subscribe( console.log )
     }) 



   }

}
