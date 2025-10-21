import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  tituloGeneral='Sección de compras'
  tituloEmpresa='Escritores Sin Fronteras - Un Viaje en Prosa';
  valorCarga:number=0;
  panelCargando(nuevaEntidad:number)
  {
    this.valorCarga=nuevaEntidad;
  }
}
