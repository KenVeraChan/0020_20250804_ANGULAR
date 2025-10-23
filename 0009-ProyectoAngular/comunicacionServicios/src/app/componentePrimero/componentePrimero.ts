import { Component } from '@angular/core';
import { Elemento } from '../elementos.model';
import { StockVariante } from '../services/stockVariante';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-componentePrimero',
  standalone: false,
  templateUrl: './componentePrimero.html',
  styleUrl: './componentePrimero.css'
})
export class ComponentePrimero implements OnInit{
  // Variables para el formulario
    puntero: number=0;
    valorEntidades: number=0;
    cuadroNombre: string = "";
    cuadroCantidad: number = 0;
    cuadroPrecio: number = 0; 
    indiceMostrar: number=0;
    valorCambiante: number=0;
    elementos: Elemento[]=[];

  constructor(public datosServicio: StockVariante)
  {
    //Sin código en el constructor
  }
  ngOnInit(): void 
  {
        this.elementos=this.datosServicio.elementos;
  }
  public agregarElemento()
  {
    this.datosServicio.agregarElementoServicios(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
  }
  public eliminarElemento()
  {
    this.datosServicio.eliminarUltimoElementoServicios();
  }
  public agregarEntidad(nuevaEntidad:string)
  {
    this.datosServicio.agregarEntidadServicios(nuevaEntidad);
  }
  public cambiarElegido():void
  {
    this.datosServicio.cambiarElegidoServicios(this.valorCambiante,this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
  }
}
