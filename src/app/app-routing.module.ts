import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:'rxJS',
     loadChildren: () =>  import('./components/rx-js/rx-js.module').then (m => m.RxJSModule),
  
  },
  {
     path:'**',
     redirectTo: 'rxJS' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
