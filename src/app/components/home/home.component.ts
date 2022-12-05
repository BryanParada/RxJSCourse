import {Component, OnInit } from '@angular/core';  
interface menuItem {
  route: string;
  text: string; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {
  
  showSubmenu: boolean = false; 
  isExpanded = true;
  isShowing = false;

  constructor(){}

  ngOnInit(): void {
  }

  menuObservables: menuItem[] = [
    {route: '/rxJS/observable', text: 'Observable' }, 
    {route: '/rxJS/unsubscribe', text: 'Unsubscribe Add' }, 
    {route: '/rxJS/subject', text: 'Subject' }, 
    {route: '/rxJS/of', text: 'Of' },
    {route: '/rxJS/fromEvent', text: 'fromEvent' },
    {route: '/rxJS/range', text: 'range' },
    {route: '/rxJS/interval-timer', text: 'interval Timer' },
    {route: '/rxJS/async-scheduler', text: 'async Scheduler' },
    {route: '/rxJS/advanced-from', text: 'Advanced From' },

    {route: '/rxJS/map-pluck', text: 'Map Pluck MapTo' },
    {route: '/rxJS/filter', text: 'Filter' },
    {route: '/rxJS/tap', text: 'Tap' },
    {route: '/rxJS/map-lab', text: 'Map Lab' },
    {route: '/rxJS/reduce', text: 'Reduce' },
    {route: '/rxJS/scan', text: 'Scan' },
    {route: '/rxJS/take', text: 'Take' },
    {route: '/rxJS/first', text: 'First' },
    {route: '/rxJS/take-while', text: 'Take While' },
    {route: '/rxJS/take-until', text: 'Take Until' },
    {route: '/rxJS/distinct', text: 'Distinct' },
    
  ];


  
 


}
