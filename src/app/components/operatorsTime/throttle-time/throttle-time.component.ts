import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { fromEvent, throttleTime, tap, map, distinctUntilChanged, asyncScheduler } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styles: [
  ]
})
export class ThrottleTimeComponent implements OnInit {


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
      throttleTime(3000)
    )
    //.subscribe(console.log)

    //Ejemplo 2
    const input = document.createElement('input');
    this.renderer.appendChild(this.divDeb.nativeElement, input)

      const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

      input$.pipe(
        throttleTime(1000, asyncScheduler, {//utiliza primer y ultima letra!
          leading: true, //si dejamos leading en false funcionara similar a debounceTime (no tomara la primera letra)
          trailing: true
        }),
        pluck('target', 'value'),
        distinctUntilChanged()
      )
      .subscribe(console.log);




   }
}
