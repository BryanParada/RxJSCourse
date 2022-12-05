import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { fromEvent, debounceTime, tap, map, distinctUntilChanged } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styles: [
  ]
})
export class DebounceTimeComponent implements OnInit {

  @ViewChild('divDeb') divDeb!: ElementRef;  
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){


    const click$ = fromEvent( document, 'click');

    click$.pipe(
      debounceTime(3000)
    )
    .subscribe(console.log)

    //Ejemplo 2
    const input = document.createElement('input');
    this.renderer.appendChild(this.divDeb.nativeElement, input)

      const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

      input$.pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged()
      )
      .subscribe(console.log);




   }

}
