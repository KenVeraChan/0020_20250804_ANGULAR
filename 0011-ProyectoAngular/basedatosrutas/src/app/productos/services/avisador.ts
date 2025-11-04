import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Avisador {
  
  public avisarCambio(mensajeCuadroNombre:string,mensajeCuadroCantidad:number,mensajeCuadroPrecio:number):void
  {
    if(mensajeCuadroNombre=="" && mensajeCuadroCantidad==0 && mensajeCuadroPrecio==0)
    {
      alert("No se han realizado cambios");
    }
    if(mensajeCuadroNombre!==undefined && mensajeCuadroCantidad==0 && mensajeCuadroPrecio!==0)
    {
      //Cambio solo de nombre y precio
          alert("Se ha realizado el cambio del elemento a: \n"+"Nombre: "+mensajeCuadroNombre+"\n"+"Precio: "+mensajeCuadroPrecio);
    }
    if(mensajeCuadroNombre!==undefined && mensajeCuadroCantidad!==0 && mensajeCuadroPrecio==0)
    {
      //Cambio solo de nombre y cantidad
          alert("Se ha realizado el cambio del elemento a: \n"+"Nombre: "+mensajeCuadroNombre+"\n"+"Cantidad: "+mensajeCuadroCantidad);
    }
    if(mensajeCuadroNombre!==undefined && mensajeCuadroCantidad==0 && mensajeCuadroPrecio==0)
    {
      //Cambio solo de nombre
          alert("Se ha realizado el cambio del elemento a: \n"+"Nombre: "+mensajeCuadroNombre);
    }
    if(mensajeCuadroNombre!==undefined && mensajeCuadroCantidad!==0 && mensajeCuadroPrecio!==0)
    {
      //Cambio de todo
          alert("Se ha realizado el cambio del elemento a: \n"+"Nombre: "+mensajeCuadroNombre+"\n"+"Cantidad: "+mensajeCuadroCantidad+"\n"+"Precio: "+mensajeCuadroPrecio);
    }
  }
}
