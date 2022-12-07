import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';  
import { fromEvent, combineLatest, pluck, from } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styles: [
  ]
})
export class CombineLatestComponent implements OnInit {

  @ViewChild('divFl') divFl!: ElementRef;    

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    // const keyup$ = fromEvent( document, 'keyup');
    // const click$ = fromEvent( document, 'click');

    // combineLatest( 
    //        keyup$.pipe( pluck('type')),
    //        click$.pipe( pluck('type'))).subscribe(console.log);

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');

    input1.placeholder = 'email@gmail.com';
    input2.placeholder = '******';

    this.renderer.appendChild(this.divFl.nativeElement, input1)
    this.renderer.appendChild(this.divFl.nativeElement, input2)

    //Helper
    const getInputStream = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup')
        .pipe(
        pluck<KeyboardEvent>('target', 'value') );
    

    combineLatest( 
      getInputStream( input1),
      getInputStream( input2),
    ).subscribe( console.log )



   }

}
