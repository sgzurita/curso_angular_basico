import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroes.component.html'
})
export class HeroeComponent{

    nombre:string='Ironman';
    edad:number=45;
    obtenerNomber():string{

        return `${this.nombre} ${this.edad}`
    }

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase()
    }
    cambiarNombre():void{
        this.nombre="capitán américa";
    }
    cambiarEdad():void{
        this.edad=30;
    }
}