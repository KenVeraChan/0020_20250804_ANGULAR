import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Elemento } from '../productos/elementos.model';
import { serviciosEmpresariales } from '../productos/elementos.model';
import { StockVariante } from '../productos/services/stockVariante';

@Component({
  selector: 'app-servicios',
  standalone: false,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements OnInit{
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;
  cuadroPrecio: number = 0; 
  elementos: Elemento[]=[];
  servicios: serviciosEmpresariales[]=[];
  /*Uso de variables para transferencia de datos entre componentes*/
  @Input() serviciosMatriz: serviciosEmpresariales[]=[];

  constructor(private router: Router,public datosServicio: StockVariante) 
  { 

  }
  ngOnInit(): void {
    this.elementos=this.datosServicio.elementos;
  this.serviciosMatriz=[
    new serviciosEmpresariales("Proyecto A - Desarrollo de Aplicación Móvil","Aplicación móvil para gestión de tareas", 12, 24000),
    new serviciosEmpresariales("Proyecto B - Implementación de Sistema ERP","Integración de un sistema ERP para optimizar procesos empresariales", 5,75000),
    new serviciosEmpresariales("Proyecto C - Campaña de Marketing Digital","Estrategia de marketing digital para aumentar la presencia en línea", 2,15000),
    new serviciosEmpresariales("Proyecto D - Rediseño de Sitio Web Corporativo","Actualización y rediseño del sitio web corporativo para mejorar la experiencia del usuario", 4,12000),
    new serviciosEmpresariales("Proyecto E - Análisis de Datos y BI","Implementación de soluciones de análisis de datos y business intelligence", 6,30000)
  ];  }
  public volverHome(): void 
  {
    this.router.navigate(['']);
  }
  public agregarElementoNuevo()
  {
    this.datosServicio.agregarElementoServicios(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
    this.elementos=this.datosServicio.elementos;
    this.router.navigate(['productos']);
  }
}
