import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core'; 
import { ajax, AjaxError } from 'rxjs/ajax';
import { fromEvent, debounceTime, map, pluck, mergeAll, Observable, mergeMap, switchMap} from 'rxjs';
import { GithubUser } from '../../../interfaces/gthub-user.interface';
import { GithubUsersResp } from '../../../interfaces/github-users.interface';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styles: [
  ]
})
export class SwitchMapComponent implements OnInit {

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
      
    //HELPERS
    const showUsers = ( users: GithubUser[]) => {

      console.log(users);
      orderList.innerHTML = '';

      for( const user of users){
        
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See page';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + ' ');
        li.append( anchor);

        orderList.append(li);
        
      }
      
    }


     //-----STREAMS
     const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');
 

    //CON TIPADO - Ejemplo desde merge-all.component.ts
    input$.pipe(
      debounceTime<KeyboardEvent>(500), 
      map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
      mergeMap<string, Observable<GithubUsersResp>>( text => ajax.getJSON( 
          `https://api.github.com/search/users?q=${text}` 
      )), 
      map<GithubUsersResp, GithubUser[]>(item => item.items)
     ).subscribe(   showUsers   ) 

    //otro ejemplo con """"""""MergeMap""""""""" - R79 mas info

    const url = 'https://httpbin.org/delay/1?arg=';

    //AL USAR SWITCHMAP OTRAS PETICIONES SERAN CANCELADAS
    input$.pipe(
      pluck('target', 'value'),
      switchMap( text => ajax.getJSON(url + text))
    ).subscribe(console.log)
           

 
 

   }

}
