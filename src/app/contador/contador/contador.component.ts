import { Component } from "@angular/core";

@Component({selector:'app-contador',
template:
`<h1>{{titulo}}</h1>
<h2>la base es :<strong>{{base}}</strong></h2>
<button (click)=acumular(base)>{{base}}</button>
<button (click)=acumular(-base)>{{-base}}</button>
<span>{{numero}}</span>`
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number= 10;
    base  : number= 5;
    acumular(valor:number):number{
     return this.numero+=valor;
    }
}