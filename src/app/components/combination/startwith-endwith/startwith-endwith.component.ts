import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core'; 
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { endWith, of, startWith } from "rxjs";
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-startwith-endwith',
  templateUrl: './startwith-endwith.component.html',
  styles: [
  ]
})
export class StartwithEndwithComponent implements OnInit {

  @ViewChild('divMa') divMa!: ElementRef;  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const numbers$ = of(1,2,3).pipe( 
        //startWith(0)
        startWith('a','b','c'),
        endWith('x', 'y','z')
    );

    //numbers$.subscribe(console.log)

    //Referencias
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.innerHTML = 'Loading...';

    //const body = document.querySelector('body');

    //Stream
    ajax.getJSON('https://reqres.in/api/users/2?delay=3')
      .pipe(
        startWith(true)
      )
      .subscribe( resp =>{

        if( resp ===true){
          this.renderer.appendChild(this.divMa.nativeElement, loadingDiv)
        } else{
          document.querySelector('.loading')?.remove();
        }

        console.log(resp);
      })






   }

}
