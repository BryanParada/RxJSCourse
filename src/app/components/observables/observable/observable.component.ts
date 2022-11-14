import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
  next: value => console.log('[Next]: ', value),
  error: error => console.warn('[Error]', error),
  complete: () => console.info('[Completed!]')
}

const obs$  = new Observable<string>( subs => {

  subs.next('Hello')
  subs.next('World')

  //forced Error
  // const a = undefined;
  // a.name = 'Bryan';

  subs.complete();

  subs.next('This line wont appear after subs.complete')

});
//--------------1
// obs$.subscribe( console.log );
//--------------2
// obs$.subscribe( resp =>{
//     console.log(resp); 
// } );

//--------------3
// obs$.subscribe(
//     value => console.log('next: ', value),
//     error => console.warn('error:', error),
//     () => console.info('Completed')
  
// );

obs$.subscribe( observer );

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent  {
 
}
