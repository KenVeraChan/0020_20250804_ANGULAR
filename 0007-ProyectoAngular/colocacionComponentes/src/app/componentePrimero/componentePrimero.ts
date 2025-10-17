import { Component } from '@angular/core';
import { Elemento } from '../elementos.model';

@Component({
  selector: 'app-componentePrimero',
  standalone: false,
  templateUrl: './componentePrimero.html',
  styleUrl: './componentePrimero.css'
})
export class ComponentePrimero {
  // Variables para el formulario
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;
  cuadroPrecio: number = 0; 
  indiceMostrar: number=0;
  valorEntidades: number=0;

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
  agregarEntidad(nuevaEntidad:string)
  {
    this.valorEntidades=Number(nuevaEntidad);      //Recoge el dato que viene del COMPONENTE HIJO
    if(this.valorEntidades>0 && this.valorEntidades<=this.elementos.length)
    {    //Tiene que estar el valor numerico entre los dos extremos del array de ELEMENTOS mostrado
      this.elementos.splice(this.valorEntidades-1,1);  //Ejecuta eliminación de la posición del array
    }
  }
}
