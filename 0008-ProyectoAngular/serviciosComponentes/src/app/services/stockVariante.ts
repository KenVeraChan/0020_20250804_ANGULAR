import { Injectable } from '@angular/core';
import { Elemento } from '../elementos.model';

@Injectable({
  providedIn: 'root'
})
export class StockVariante {
    Elemento: Elemento[];
    puntero: number=0;
    constructor() 
    {

    }
    //Cambiando elementos del STOCK
    setElementoNombre(nombre: string,puntero: number): void
    {
      this.Elemento[puntero].nombre=nombre;
    }
    setElementoCantidad(cantidad: number,puntero: number): void
    {
      this.Elemento[puntero].cantidad=cantidad;
    }
    setElementoPrecio(precio: number,puntero: number): void
    {
      this.Elemento[puntero].precio=precio;
    }   
    //Obteniendo elementos del STOCK
    getElementoNombre(puntero: number): void
    {
      this.Elemento[puntero].nombre;
    }
    getElementoCantidad(puntero: number): void
    {
      this.Elemento[puntero].cantidad;
    }
    getElementoPrecio(puntero: number): void
    {
      this.Elemento[puntero].precio;
    }

}
