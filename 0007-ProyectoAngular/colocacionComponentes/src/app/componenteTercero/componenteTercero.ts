import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componenteTercero',
  standalone: false,
  templateUrl: './componenteTercero.html',
  styleUrl: './componenteTercero.css'
})
export class ComponenteTercero {


  //AREA DEL OUTPUT DE EVENTOS Y DATOS
  @Output() semaforo= new EventEmitter<number>();
  
  cargaComponente(value:number):void
  {
    this.semaforo.emit(value);    //Se lanza el valor de entidadExtraida lanzando el evento
  }
}
