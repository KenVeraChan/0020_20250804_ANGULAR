import { Component } from '@angular/core';
import { Elemento } from './elementos.model';
import { ServiciosLibros } from './serviciosAppLibros/serviciosLibros';

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
  valorEntidades: number=0;

    elementos: Elemento[] = [
    new Elemento("Manzanas", 5, 1.20),
    new Elemento("Naranjas", 3, 0.80),
    new Elemento("Plátanos", 6, 1.10),
    new Elemento("Piñas", 21, 1.45),
    new Elemento("Aguacates", 6, 0.20),
  ];
  
  //Area de servicios creados
  constructor(private ServiciosLibros: ServiciosLibros) {}

  public agregarElemento(): void
  {
    if(this.cuadroCantidad > 0 && this.cuadroPrecio > 0) 
    {
      alert(this.ServiciosLibros.mostrarInfo()+"El precio con descuento del 15%: $"+this.ServiciosLibros.aplicarDescuento(15).toFixed(2));
      const nuevoElemento = new Elemento(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
      this.elementos.push(nuevoElemento);
    }
  }
  public eliminarElemento(): void
  {
      this.elementos.pop();
  }
  public eliminarEntidad(nuevaEntidad:string): void
  {
    this.valorEntidades=Number(nuevaEntidad);      //Recoge el dato que viene del COMPONENTE HIJO
    if(this.valorEntidades>0 && this.valorEntidades<=this.elementos.length)
    {    //Tiene que estar el valor numerico entre los dos extremos del array de ELEMENTOS mostrado
      this.elementos.splice(this.valorEntidades-1,1);  //Ejecuta eliminación de la posición del array
    }
  }
}
