import { Component, OnInit } from '@angular/core';
import { of, from, Observer } from "rxjs";
import { supportsScrollBehavior } from '@angular/cdk/platform';


@Component({
  selector: 'app-advanced-from',
  templateUrl: './advanced-from.component.html',
  styles: [
  ]
})
export class AdvancedFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    // of = toma argumentos y genera una secuencia
    // from = array, promise, iterable, observable

    const observer: Observer<any> = {
      next: val => console.log('[Next]: ', val),
      error: error => console.warn('[Error]', error),
      complete: () => console.info('[Observer Completed!]')
    }

    // const source$ = from([1,2,3,4,5]);
    // const source$ = of(...[1,2,3,4,5]);

    //const source$ = from('Bryan')

    const source$ = from( fetch('http://api.github.com/users/BryanParada') );

    // source$.subscribe( async(resp) =>{
    //   console.log(resp);

    //   const dataResp = resp.json()
    //   console.log(dataResp);
       
    // });

    //source$.subscribe( observer );






    const myGenerator = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    }

    const myIterable = myGenerator();

    // for (let id of myIterable){
    //   console.log(id);
      
    // }
    from(myIterable).subscribe(observer);




 
}

}