import { Component, signal } from '@angular/core';
import { Elemento } from './elementos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  // Variables para el formulario
  tituloGeneral='Sección de compras'
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;
  cuadroPrecio: number = 0; 
  indiceMostrar: number=0;
  tituloEmpresa='Escritores Sin Fronteras - Un Viaje en Prosa';

    elementos: Elemento[] = [
    new Elemento("Manzanas", 5, 1.20),
    new Elemento("Naranjas", 3, 0.80),
    new Elemento("Plátanos", 6, 1.10),
    new Elemento("Piñas", 21, 1.45),
    new Elemento("Aguacates", 6, 0.20),
  ];
  public agregarElemento()
  {
    if(this.cuadroCantidad > 0 && this.cuadroPrecio > 0) 
    {
      const nuevoElemento = new Elemento(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
      this.elementos.push(nuevoElemento);
    }
  }
  public eliminarElemento()
  {
      this.elementos.pop();
  }
}
