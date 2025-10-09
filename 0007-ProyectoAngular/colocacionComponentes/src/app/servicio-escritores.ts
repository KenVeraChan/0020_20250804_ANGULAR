import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEscritores {
  constructor() 
  { 
    
  } 
  muestraMensaje(mensaje:string)
  {
    alert(mensaje);
  }
}
