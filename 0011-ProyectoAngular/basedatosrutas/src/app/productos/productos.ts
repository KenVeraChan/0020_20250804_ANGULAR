import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  standalone: false,
  styleUrl: './productos.css'
})
export class Productos {
  tituloGeneral='Sección de compras'
  tituloEmpresa='Escritores Sin Fronteras - Un Viaje en Prosa';
  valorCarga:number=0;
  panelCargando(nuevaEntidad:number)
  {
    this.valorCarga=nuevaEntidad;
  }
}