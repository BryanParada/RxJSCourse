import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';  
import { FormGroup, FormBuilder } from '@angular/forms'
import { fromEvent, tap, map, mergeMap, pluck, catchError, of, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-flattening-lab',
  templateUrl: './flattening-lab.component.html',
  styles: [
  ]
})
export class FlatteningLabComponent implements OnInit {

  @ViewChild('divFl') divFl!: ElementRef;    
  myForm : FormGroup;

  constructor(
    private renderer: Renderer2, 
    private fb: FormBuilder) { 
      this.myForm = fb.group({
        name : [],
        family: []
    });     
  }

  ngOnInit(): void {
    console.clear();  
   }

   ngAfterViewInit(): void { 
    this.initComponent() 
   }

   initComponent(){

    //helper
    const requestHttpLogin = ( userPass: any ) =>
     ajax.post('http://reqres.in/api/login?delay=1', userPass) 
         .pipe(
          pluck('response', 'token'),
          catchError(err => of('xxx'))
         )

    //creando formulario
    const form = document.createElement('form'); 
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const submitBtn = document.createElement('button');

    //configuraciones
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.value = 'eve.holt@reqres.in';

    inputPass.type = 'password';
    inputPass.placeholder = 'password';
    inputPass.value = 'cityslicka';

    submitBtn.innerHTML = 'Enter';

    
    // this.renderer.appendChild(form, inputEmail)
    // this.renderer.appendChild(form, inputPass)
    // this.renderer.appendChild(form, submitBtn)

    // this.renderer.appendChild(this.divFl.nativeElement, inputEmail)
    // this.renderer.appendChild(this.divFl.nativeElement, inputPass)
    // this.renderer.appendChild(this.divFl.nativeElement, submitBtn)
    form.append( inputEmail, inputPass, submitBtn)
    //document.querySelector('divF2')?.appendChild(form)
    this.renderer.appendChild(this.divFl.nativeElement, form)
    

    //Streams
    const submitForm$ = fromEvent<SubmitEvent>( form, 'submit')
                        .pipe(
                          tap( ev => ev.preventDefault()),
                          map( ev => ({
                            //email: (ev.target as HTMLInputElement)?.value?.[0]
                            //email: (ev.target as SubmitEvent)?.[0].value
                            //email: ev?.target[0].value?
                            //password: ev.target[1].value
                            email: 'eve.holt@reqres.in',
                            password: 'cityslicka'
                          })),
                          //              |----------------------------v
                          // mergeMap( userPass => requestHttpLogin(userPass) )  
                          mergeMap( requestHttpLogin ) //primer argumento recibido pasara a esta funcion
                          //^^^^^
                          //switchMap
                          //exhaustMap
                        );

    submitForm$.subscribe( token => {
      console.log(token);
    });



   }

}
