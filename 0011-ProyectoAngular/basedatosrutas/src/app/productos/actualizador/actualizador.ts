import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elemento } from '../elementos.model';
import { StockVariante } from '../services/stockVariante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizador',
  standalone: false,
  templateUrl: './actualizador.html',
  styleUrl: './actualizador.css',
})
export class Actualizador {
actualizadorNombre: string='';
actualizadorCantidad: number=0;
actualizadorPrecio: number=0;
actualizadorTotal: number=0;
indiceActualizar: number=0;
accion: string="";

  public elemento: Elemento []=[];
  constructor(private stockVariante: StockVariante, private route: ActivatedRoute, private Router: Router) {}

  ngOnInit(): void {
    // Aquí puedes realizar alguna acción al inicializar el componente
    this.accion = this.route.snapshot.queryParams['accion'];
    this.indiceActualizar= Number(this.route.snapshot.params['id']-1);
    this.elemento=this.stockVariante.elementos;   //Rellena el array de ELEMENTOS del servicio
    this.actualizadorNombre=this.elemento[this.indiceActualizar].nombre;
    this.actualizadorCantidad=this.elemento[this.indiceActualizar].cantidad;
    this.actualizadorPrecio=this.elemento[this.indiceActualizar].precio;
    this.actualizadorTotal=this.actualizadorCantidad*this.actualizadorPrecio;
  }
  public ejecutarAccion():void
  {
    if(parseInt(this.accion)==1)
    {
      this.elemento[this.indiceActualizar].nombre=this.actualizadorNombre;
      this.elemento[this.indiceActualizar].cantidad=this.actualizadorCantidad;
      this.elemento[this.indiceActualizar].precio=this.actualizadorPrecio;
      this.elemento[this.indiceActualizar].total=this.actualizadorCantidad*this.actualizadorPrecio;
      this.Router.navigate(['productos']);
    }
    if(parseInt(this.accion)==2)
    {
      this.elemento.splice(this.indiceActualizar,1);
      this.Router.navigate(['productos']);
    }
  }
  public volverHome():void
  {
    this.Router.navigate(['productos']);
  }
}
