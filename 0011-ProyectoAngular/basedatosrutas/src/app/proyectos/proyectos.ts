import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Elemento } from '../productos/elementos.model';
import { proyectosEmpresariales } from '../productos/elementos.model';
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
  proyectos: proyectosEmpresariales[]=[];
  /*Uso de variables para transferencia de datos entre componentes*/
  @Input() proyectosMatriz: proyectosEmpresariales[]=[];

  constructor(private router: Router,public datosServicio: StockVariante) 
  { 

  }
  ngOnInit(): void
  {
  this.elementos=this.datosServicio.elementos;
  this.proyectosMatriz=[
    new proyectosEmpresariales("Proyecto A - Desarrollo de Aplicación Móvil","Aplicación móvil para gestión de tareas", new Date("2024-01-15"), new Date("2024-06-15"),24000),
    new proyectosEmpresariales("Proyecto B - Implementación de Sistema ERP","Integración de un sistema ERP para optimizar procesos empresariales", new Date("2024-02-01"), new Date("2024-12-01"),75000),
    new proyectosEmpresariales("Proyecto C - Campaña de Marketing Digital","Estrategia de marketing digital para aumentar la presencia en línea", new Date("2024-03-10"), new Date("2024-09-10"),15000),
    new proyectosEmpresariales("Proyecto D - Rediseño de Sitio Web Corporativo","Actualización y rediseño del sitio web corporativo para mejorar la experiencia del usuario", new Date("2024-04-05"), new Date("2024-08-05"),12000),
    new proyectosEmpresariales("Proyecto E - Análisis de Datos y BI","Implementación de soluciones de análisis de datos y business intelligence", new Date("2024-05-20"), new Date("2024-11-20"),30000)
  ];
  }
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
