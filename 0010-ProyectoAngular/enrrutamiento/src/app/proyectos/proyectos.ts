import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elemento } from '../productos/elementos.model';
import { StockVariante } from '../productos/services/stockVariante';

@Component({
  selector: 'app-proyectos',
  standalone: false,
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;
  cuadroPrecio: number = 0; 
  elementos: Elemento[]=[];

  constructor(private router: Router,public datosServicio: StockVariante) 
  { 

  }
  ngOnInit(): void
  {
  this.elementos=this.datosServicio.elementos;
  }
  public volverHome(): void 
  {
    this.router.navigate(['']);
  }
  public agregarElementoNuevo()
  {
    this.datosServicio.agregarElementoServicios(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
    this.elementos=this.datosServicio.elementos;
    alert(this.elementos.length);
    this.router.navigate(['productos']);
  }
}
