import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core'; 
import { fromEvent, map, tap, takeWhile, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styles: [
  ]
})
export class TakeUntilComponent implements OnInit  {

  @ViewChild('divTU') divTU!: ElementRef;  
  
  constructor(private renderer: Renderer2) {  }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

       const button = document.createElement('button');
       button.innerHTML = 'Stop Timer';
       this.renderer.appendChild(this.divTU.nativeElement, button)
   
       const counter$ = interval(1000);
       const clickBtn$ = fromEvent( button, 'click' );

      counter$.pipe(
        takeUntil( clickBtn$ )
      )
      .subscribe({
          next: val => console.log('next', val),
          complete: () => console.log('complete')
      }) 




   }
 

}
