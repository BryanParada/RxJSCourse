import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { asyncScheduler } from "rxjs";

@Component({
  selector: 'app-async-scheduler',
  templateUrl: './async-scheduler.component.html',
  styles: [
  ]
})
export class AsyncSchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    this.initComponent();
   }

   initComponent(){

    // setTimeout(() => {}, 3000);
    // setInterval(() => {}, 3000);

    

    const greet = () => console.log('hello world');
    const greet2 = (name: any) => console.log(`Hi ${name}`);
    
    
     //asyncScheduler.schedule( greet, 2000 );
     //asyncScheduler.schedule( greet2, 2000, 'Bryan' );

    const subs = asyncScheduler.schedule( function(state) {

        console.log('state', state);

        this.schedule( state! + 1, 1000 );
        
    }, 3000, 0);

    // setTimeout(()=>{
    //   subs.unsubscribe();
    // }, 6000);

    asyncScheduler.schedule( () => subs.unsubscribe(), 6000);


   }

}
