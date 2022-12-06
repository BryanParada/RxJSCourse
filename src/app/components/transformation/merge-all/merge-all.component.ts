import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core'; 
import { ajax, AjaxError } from 'rxjs/ajax';
import { fromEvent, debounceTime, map, pluck, mergeAll, Observable } from 'rxjs';
import { GithubUser } from '../../../interfaces/gthub-user.interface';
import { GithubUsersResp } from '../../../interfaces/github-users.interface';

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

    //  input$.pipe(
    //   debounceTime(500), 
    //   map( event =>{
    //     const text = (<HTMLInputElement>event.target).value //event.target['value'];
       

    //     return ajax.getJSON(
    //       `https://api.github.com/search/users?q=${text}`
    //     )
    //   })
    //  ).subscribe( resp => {
    //     resp.pipe(
    //       //pluck('url')
    //     )
    //     .subscribe( console.log )
    //  }) 



    //SIN TIPADO
    //  input$.pipe(
    //   debounceTime(500),
    //   pluck('target','value'),
    //   map( text => ajax.getJSON(
    //       `https://api.github.com/search/users?q=${text}` 
    //   )),
    //   mergeAll(),
    //   pluck('items')
    //  ).subscribe( resp => {
    //   console.log(resp)
    //  }) 


    //CON TIPADO
    input$.pipe(
      debounceTime<KeyboardEvent>(500),
      //pluck<KeyboardEvent, string>('target','value'),
      map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
      map<string, Observable<GithubUsersResp>>( text => ajax.getJSON( 
          `https://api.github.com/search/users?q=${text}` 
      )),
      mergeAll<Observable<GithubUsersResp>>(),
      //pluck('items')
      map<GithubUsersResp, GithubUser[]>(item => item.items)
     ).subscribe( 
      showUsers

    //   users => {
    //   console.log(users[0].login)
    //   // console.log('users', users);
    //  }
     
     ) 

 
 

   }

}
