import { Component, OnInit } from '@angular/core'; 
import { Observable, Observer, Subscriber } from 'rxjs';




@Component({
  selector: 'app-unsubscribe-add',
  templateUrl: './unsubscribe-add.component.html',
  styles: [
  ]
})
export class UnsubscribeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.InitComponent()

  }

  InitComponent(){
 
    const observer: Observer<any> = {
      next: value => console.log('[Next]: ', value),
      error: error => console.warn('[Error]', error),
      complete: () => console.info('[Completed!]')
    };
    
    
    const insterval$ = new Observable<number>( subs => {
    
      let num = 0
    
      //crear un contador, 1,2,3,4,5....
      const interval = setInterval( () =>{
          subs.next(num ++);
          console.log('num in interval is: ',num);
          
      }, 1000);

      setTimeout(() =>{
        subs.complete();
      }, 2500);
    
      return () =>{
          clearInterval(interval);
          console.log('Interval destroyed');
          
      }
    
    });
    
    const subscription1 = insterval$.subscribe( num => console.log('Num:', num) );
    const subscription2 = insterval$.subscribe( num => console.log('Num:', num) );
    const subscription3 = insterval$.subscribe( num => console.log('Num:', num) );

    subscription1.add( subscription2) 
    subscription2.add( subscription3);
    
    setTimeout(() =>{
      // subscription1.unsubscribe()
      // subscription2.unsubscribe()
      // subscription3.unsubscribe()
    
      console.log('Time out Completed');
      
    }, 3000);



  }

}
