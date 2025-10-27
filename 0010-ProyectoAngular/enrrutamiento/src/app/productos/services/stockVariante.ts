import { Injectable } from '@angular/core';
import { Elemento } from '../elementos.model';
import { Avisador } from './avisador';

@Injectable({
  providedIn: 'root'
})
export class StockVariante {

    constructor(public Avisador: Avisador) 
    {
      
    }
    elementos: Elemento[] = [
      new Elemento("Manzanas", 5, 1.20),
      new Elemento("Naranjas", 3, 0.80),
      new Elemento("Plátanos", 6, 1.10),
      new Elemento("Piñas", 21, 1.45),
      new Elemento("Aguacates", 6, 0.20),
      ];

    public agregarElementoServicios(cuadroNombre:string, cuadroCantidad:number, cuadroPrecio:number):void
    {
      if(cuadroCantidad > 0 && cuadroPrecio > 0) 
      {
        const nuevoElemento = new Elemento(cuadroNombre,cuadroCantidad,cuadroPrecio);
        this.elementos.push(nuevoElemento);
      }
    }
    public eliminarUltimoElementoServicios():void
    {
      this.elementos.pop();
    }
    public agregarEntidadServicios(nuevaEntidad: string): void 
    {
      const valorEntidades=Number(nuevaEntidad);      //Recoge el dato que viene del COMPONENTE HIJO
      if(valorEntidades>0 && valorEntidades<=this.elementos.length)
      {    //Tiene que estar el valor numerico entre los dos extremos del array de ELEMENTOS mostrado
        this.elementos.splice(valorEntidades-1,1);  //Ejecuta eliminación de la posición del array
      }
    }
    public cambiarElegidoServicios(valorCambiante: number, cuadroNombre: string, cuadroCantidad: number, cuadroPrecio: number): void
    {
      if(valorCambiante>0 && valorCambiante<=this.elementos.length)
      {
        if((cuadroNombre =="" && cuadroPrecio > 0) || (cuadroNombre =="" && cuadroCantidad > 0))
        {
          alert("No se puede ejecutar el cambio con el concepto vacío");
        }
        if(cuadroNombre !="" && cuadroCantidad > 0 && cuadroPrecio > 0)
        {
        //Realiza el cambio de las características del elemento seleccionado
        this.elementos[valorCambiante-1].setNombre(cuadroNombre);
        this.elementos[valorCambiante-1].setCantidad(cuadroCantidad);
        this.elementos[valorCambiante-1].setPrecio(cuadroPrecio);
            this.Avisador.avisarCambio(cuadroNombre,cuadroCantidad,cuadroPrecio);
        }
        if(cuadroNombre !="" && cuadroCantidad <= 0 && cuadroPrecio > 0)
        {
        //Realiza el cambio de todo menos de la cantidad
        this.elementos[valorCambiante-1].setNombre(cuadroNombre);
        this.elementos[valorCambiante-1].setPrecio(cuadroPrecio);
            this.Avisador.avisarCambio(cuadroNombre,cuadroCantidad,cuadroPrecio);
        }
        if(cuadroNombre !="" && cuadroCantidad > 0 && cuadroPrecio <= 0)
        {
        //Realiza el cambio de todo menos del precio
        this.elementos[valorCambiante-1].setNombre(cuadroNombre);
        this.elementos[valorCambiante-1].setCantidad(cuadroCantidad);
            this.Avisador.avisarCambio(cuadroNombre,cuadroCantidad,cuadroPrecio);
        }
        if(cuadroNombre !="" && cuadroCantidad <= 0 && cuadroPrecio <= 0)
        {
        //Realiza el cambio solo del nombre
        this.elementos[valorCambiante-1].setNombre(cuadroNombre);
            this.Avisador.avisarCambio(cuadroNombre,cuadroCantidad,cuadroPrecio);
        }
      }
      else
      {
        alert("El valor seleccionado para cambiar no es correcto. Fuera del intervalo establecido");
      }
    }
}
