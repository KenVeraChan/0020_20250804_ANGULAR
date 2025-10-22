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
  valorCambiante: number=0;

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
  public agregarEntidad(nuevaEntidad:string)
  {
    this.valorEntidades=Number(nuevaEntidad);      //Recoge el dato que viene del COMPONENTE HIJO
    if(this.valorEntidades>0 && this.valorEntidades<=this.elementos.length)
    {    //Tiene que estar el valor numerico entre los dos extremos del array de ELEMENTOS mostrado
      this.elementos.splice(this.valorEntidades-1,1);  //Ejecuta eliminación de la posición del array
    }
  }
  public cambiarElegido():void
  {
    if(this.valorCambiante>0 && this.valorCambiante<=this.elementos.length)
    {
      if((this.cuadroNombre =="" && this.cuadroPrecio > 0) || (this.cuadroNombre =="" && this.cuadroCantidad > 0))
      {
        alert("No se puede ejecutar el cambio con el concepto vacío");
      }
      if(this.cuadroNombre !="" && this.cuadroCantidad > 0 && this.cuadroPrecio > 0)
      {
      //Realiza el cambio de las características del elemento seleccionado
      this.elementos[this.valorCambiante-1].setNombre(this.cuadroNombre);
      this.elementos[this.valorCambiante-1].setCantidad(this.cuadroCantidad);
      this.elementos[this.valorCambiante-1].setPrecio(this.cuadroPrecio);
      }
      if(this.cuadroNombre !="" && this.cuadroCantidad <= 0 && this.cuadroPrecio > 0)
      {
      //Realiza el cambio de todo menos de la cantidad
      this.elementos[this.valorCambiante-1].setNombre(this.cuadroNombre);
      this.elementos[this.valorCambiante-1].setPrecio(this.cuadroPrecio);
      }
      if(this.cuadroNombre !="" && this.cuadroCantidad > 0 && this.cuadroPrecio <= 0)
      {
      //Realiza el cambio de todo menos del precio
      this.elementos[this.valorCambiante-1].setNombre(this.cuadroNombre);
      this.elementos[this.valorCambiante-1].setCantidad(this.cuadroCantidad);
      }
      if(this.cuadroNombre !="" && this.cuadroCantidad <= 0 && this.cuadroPrecio <= 0)
      {
      //Realiza el cambio solo del nombre
      this.elementos[this.valorCambiante-1].setNombre(this.cuadroNombre);
      }
    }
    else
    {
      alert("El valor seleccionado para cambiar no es correcto. Fuera del intervalo establecido");
    }
  }
}
