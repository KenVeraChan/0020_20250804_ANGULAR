import { Component, OnInit, Input } from '@angular/core';
import { Elemento } from '../elementos.model';

@Component({
  selector: 'app-componenteSegundo',
  standalone: false,
  templateUrl: './componenteSegundo.html',
  styleUrl: './componenteSegundo.css'
})
export class ComponenteSegundo implements OnInit {
/*Uso de variables para transferencia de datos entre componentes*/
  @Input() elementoNombre: string;
  @Input() elementoCantidad: number
  @Input() elementoPrecio: number;
  @Input() elementosMatriz: Elemento[];

  ngOnInit(): void {
    // Aquí puedes realizar alguna acción al inicializar el componente
  }

  tituloElementos = 'lista de la compra';
}
