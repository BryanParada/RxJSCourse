import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { fromEvent, map, tap } from 'rxjs';


@Component({
  selector: 'app-map-lab',
  templateUrl: './map-lab.component.html',
  styles: [
  ]
})
export class MapLabComponent implements OnInit {

  text: string = 'xd'
  @ViewChild('divprogressBar', {static: true}) divprogressBar!: ElementRef; 

  constructor() { }

  ngOnInit(): void {
    console.clear();
   
   }

   ngAfterViewInit(): void {
    this.initComponent(); 
   }

   initComponent(){

  // const text = document.createElement('div');

  // text.innerHTML = 
  this.text = ` 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna eros. Phasellus eu odio quis elit vestibulum feugiat eu et enim. Nulla condimentum a nulla in maximus. Sed varius odio vitae nunc dapibus, et tempus justo venenatis. Duis at diam ac dui eleifend cursus in sed urna. Curabitur sit amet auctor libero. Aliquam urna magna, pretium sit amet lobortis id, pellentesque in massa. Nam condimentum pretium congue. Aliquam fermentum risus nec purus pulvinar vehicula. Suspendisse in dignissim mi. Donec vel commodo justo, eu lobortis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex tellus. Pellentesque molestie quam quis leo sodales vehicula.
                
                Ut egestas sit amet velit et aliquet. Etiam eget dolor dignissim, dignissim mauris quis, maximus augue. Quisque elementum leo quis condimentum dictum. Cras tortor sapien, elementum pulvinar fermentum vitae, sagittis a metus. Nam libero lacus, ornare sed tincidunt bibendum, vulputate vel urna. Quisque vestibulum scelerisque risus sed mattis. Nunc laoreet tincidunt erat, vel elementum enim sagittis non. Mauris sed nisl eget eros convallis rutrum et vitae quam. Nulla ipsum urna, cursus ac lorem id, sollicitudin fringilla dui.
                
                Maecenas nunc mi, sagittis pulvinar lorem id, posuere accumsan elit. Etiam eu tellus mi. Praesent pulvinar pharetra mi ac varius. Curabitur dui augue, egestas non pellentesque sit amet, volutpat sed nisl. Cras non mi eget sem vulputate tincidunt. Nam sollicitudin nunc vitae nisl dictum congue eu nec justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra metus magna, eu gravida mi efficitur eu. Nam at risus nibh. Fusce condimentum urna a neque ornare faucibus. Nulla et sodales ex. Phasellus gravida ornare tortor a eleifend. Maecenas non ipsum ut erat molestie ultrices non ut mi. Nam ultricies, nunc et porttitor pulvinar, odio nulla malesuada erat, ac placerat ligula eros sit amet massa.
                
                Nullam consectetur blandit justo, at maximus ipsum convallis ut. Maecenas pellentesque ac ligula egestas fermentum. Curabitur sed tortor arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id erat eu risus cursus porta et vel leo. Suspendisse nisi lectus, euismod non blandit vel, blandit ac arcu. Etiam sollicitudin, eros a scelerisque rhoncus, ipsum purus accumsan orci, nec vehicula risus ipsum vitae sapien.
                
                Fusce tempus fermentum mauris, non fringilla lectus auctor quis. Nulla in lectus finibus, varius neque vitae, venenatis elit. Sed orci ex, convallis a faucibus iaculis, euismod id risus. Nullam malesuada facilisis neque ac auctor. Pellentesque ultrices viverra massa, eget tempus felis ultricies non. In elementum, sapien ut pulvinar porttitor, justo eros convallis libero, porttitor rhoncus quam dolor feugiat sapien. Maecenas vitae felis dictum, auctor quam in, varius urna. Mauris non velit scelerisque, volutpat ipsum vitae, semper libero. Curabitur at faucibus erat, in sollicitudin erat. Praesent ut ante in lacus vulputate ullamcorper. Donec bibendum nisl sem, vel efficitur sem laoreet a. Ut porttitor eget ex quis sagittis. Maecenas enim diam, bibendum vitae nisl vel, sodales facilisis ipsum. Nam ornare consequat scelerisque.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ante id dolor aliquam, vel lacinia lacus molestie. Aenean blandit orci cursus, eleifend odio eu, imperdiet eros. Proin consectetur metus felis, ut pellentesque odio aliquet dictum. Aliquam erat volutpat. In aliquam eget eros et ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque faucibus gravida arcu, eu dapibus purus scelerisque at. Vivamus sollicitudin blandit enim. Maecenas sollicitudin quam ac sem pellentesque commodo. Fusce et sapien urna. Donec posuere nisi nec rutrum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                
                Mauris sit amet nisl et nulla faucibus aliquet. Praesent convallis suscipit eros in aliquam. Sed eleifend nulla nec mi bibendum aliquet. Suspendisse ac est id sem sagittis imperdiet. Curabitur hendrerit dolor ac arcu vestibulum volutpat. Ut porta ac orci vitae rhoncus. Proin sit amet elementum diam. Nulla facilisis metus quis metus rutrum volutpat.
                
                Nam dictum fringilla metus vel pulvinar. Phasellus blandit finibus felis, at mattis tellus tempus sed. Cras eu odio cursus, eleifend urna quis, venenatis libero. Nam viverra, mauris et efficitur porta, enim mauris interdum nulla, non ultrices purus lacus ut libero. Suspendisse cursus accumsan purus a facilisis. Vivamus fermentum aliquam metus, at sagittis diam feugiat quis. Proin eget dictum nulla. Aliquam molestie enim eu neque varius pellentesque. Proin libero dui, fermentum eget aliquet sit amet, ullamcorper id purus. Nulla finibus a metus a tempor. Duis in blandit lacus. Ut pretium tincidunt tincidunt. Nullam sed molestie velit. Nulla ac eleifend est. Praesent nec nisl molestie mi scelerisque commodo vel quis arcu.
                
                Vivamus turpis nibh, ultrices et arcu ut, bibendum sodales est. Nullam mattis arcu ac tellus egestas, non interdum metus vehicula. Ut vel metus est. Donec molestie nisl eget orci euismod tristique. Morbi placerat tellus a urna auctor pharetra. Duis mattis et velit et iaculis. Cras quis venenatis sem, ac maximus elit. Mauris in sollicitudin mi. Donec nulla nibh, rhoncus a quam eu, condimentum aliquet lorem. Sed venenatis orci tempor, blandit eros in, condimentum velit. Aenean magna est, interdum eget pulvinar eget, tempus dictum lacus. Fusce pharetra molestie ex et gravida.
                
                Sed volutpat, nibh at volutpat dictum, tellus sem tincidunt purus, quis vulputate diam lorem nec lorem. Sed gravida magna in est blandit mollis. Etiam commodo mi sit amet ex tristique, quis scelerisque ipsum accumsan. Donec hendrerit gravida pretium. Proin ac ex at neque interdum vestibulum sed non nunc. Aliquam vel leo tincidunt, volutpat justo quis, interdum velit. Pellentesque convallis fermentum faucibus.
                
          `

    // const body = document.querySelector('body');
    // body?.append(text);

    // const progressBar = document.createElement('div');
    // progressBar.setAttribute('class', 'progress-bar');
    // body.append(progressBar);


    //FUNCION QUE HAGA EL CALCULO
    const calcularPorcentajeScroll = ( event: any ) => {
     console.log(event);

      // const {
      //   scrollTop,
      //   scrollHeight,
      //   clientHeight
      // } = event.target.documentElement;

      // console.log(scrollTop,scrollHeight,clientHeight);
      
      // return ( scrollTop / (scrollHeight - clientHeight) ) * 100
    }

    // const scrollPROGRESS$ = fromEvent(this.progressBar.nativeElement,'scroll');
    // scrollPROGRESS$.subscribe(
    //   (e: Event) => console.log({scrollPosition: e.target['scrollTop']})
    //   );
 

      const scrollPROGRESS$ = fromEvent(this.divprogressBar.nativeElement,'scroll');
      scrollPROGRESS$.pipe(
         
        tap(console.log)
        );


 
    //Streams
    const scroll$ = fromEvent( document, 'scroll', { capture: true });
    //scroll$.subscribe(console.log);

    const progress$ = scroll$.pipe(
      //map(event => calcularPorcentajeScroll(event))
      map( calcularPorcentajeScroll),
      tap( console.log)
    );

    progress$.subscribe( porcentaje =>{

      //progressBar.style.width = `${porcentaje}%`;
      console.log(porcentaje);
      
    })



   }



}
