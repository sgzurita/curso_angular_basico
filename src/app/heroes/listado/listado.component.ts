import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {
   heroes:string[]=['Ironman','SpiderMan','Hulk'];
   heroBorrado:string='';
  constructor() { 

  }
  borrarHeroe(){
    let hero:string[]|string= this.heroes.splice(0,1)||'';
    if( !(hero instanceof String)){
      this.heroBorrado=hero[0];
    }
    
  }
  //primer paso del ciclo de vida
  //para traer contenido de un servicio
 // ngOnInit(): void {
 //  console.log('ngOnInit');
 //}

}
