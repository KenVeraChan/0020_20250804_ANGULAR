import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Elemento } from '../elementos.model';
import { StockVariante } from '../services/stockVariante';

@Component({
  selector: 'app-componenteSegundo',
  standalone: false,
  templateUrl: './componenteSegundo.html',
  styleUrl: './componenteSegundo.css'
})
export class ComponenteSegundo implements OnInit {
//Constructor del servicio para cuando se active el segundo botón
  constructor(public stockVariante: StockVariante) {}

/*Uso de variables para transferencia de datos entre componentes*/
  @Input() elementosMatriz: Elemento[];
  @Input() tituloElementos = 'lista de la compra';

  ngOnInit(): void {
    // Aquí puedes realizar alguna acción al inicializar el componente
  }
  //SELECTOR DE OPERACIONES
  punteroOperacion: number=0; //0-Ninguna, 1-Eliminar, 2-Cambiar
  valorOperacion: string=''; //Valor de la operación a realizar
  //AREA DEL OUTPUT DE EVENTOS Y DATOS
  @Output() entidadExtraida= new EventEmitter<string>();
  public emiteCaracteristicas(valorOperacion:string)
  {
    this.entidadExtraida.emit(valorOperacion);    //Se lanza el valor de entidadExtraida lanzando el evento
  }
}
