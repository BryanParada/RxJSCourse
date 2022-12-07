import { Component, OnInit } from '@angular/core';
import { of, interval, take, delay, forkJoin, catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styles: [
  ]
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    const numbers$ = of(1,2,3,4);
    const interval$ = interval(1000).pipe(take(3)); //0..1..2
    const letters$ = of('a','b','c').pipe(delay(3500));

    // forkJoin(
    //   numbers$,
    //   interval$,
    //   letters$
    // ).subscribe( console.log )

    // forkJoin(
    //   numbers$,
    //   interval$,
    //   letters$
    // ).subscribe( resp => {
    //   console.log('numbers', resp[0])
    //   console.log('interval', resp[1])
    //   console.log('letters', resp[2])
    // } )
 
    // forkJoin(
    //   {
    //   numbers$,
    //   interval$,
    //   letters$
    // }).subscribe( resp => {
    //  console.log( resp ) //resp.letters$

    // } )

    forkJoin(
      {
      num: numbers$,
      int: interval$,
      let: letters$
    }).subscribe( resp => {
     console.log( resp ) //resp.letters$

    } )

// --------------------------------------------------LAB FORKJOIN
    const GITHUB_API_URL = 'https://api.github.com/users';
    const GTIHUB_USER    = 'BryanParada'

    forkJoin({
      user: ajax.getJSON( 
        `${GITHUB_API_URL}/${GTIHUB_USER}`
      ),
      repos: ajax.getJSON( 
        `${GITHUB_API_URL}/${GTIHUB_USER}/reposFFFF`
      ).pipe(
        catchError( err => of([]))  
      ),
      gists: ajax.getJSON( 
        `${GITHUB_API_URL}/${GTIHUB_USER}/gists`
      ),
    }).pipe(
      catchError( err => of(err.message))
    ).subscribe( console.log )


   }

}
