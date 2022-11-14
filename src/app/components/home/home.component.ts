import { Component, OnInit } from '@angular/core';

interface menuItem {
  route: string;
  text: string; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: menuItem[] = [
    {route: '/rxJS/observable', text: 'Observable' }, 
    {route: '/rxJS/unsubscribe', text: 'Unsubscribe Add' } 
    
  ];

}
