import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockVariante {
    puntero: number=0;
    constructor() 
    {
      
    }
    public getElemento(puntero: number):void
    {
      this.puntero=puntero;
    }
}
