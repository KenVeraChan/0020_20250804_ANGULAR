import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Elemento } from '../elementos.model';

@Component({
  selector: 'app-actualizador',
  standalone: false,
  templateUrl: './actualizador.html',
  styleUrl: './actualizador.css',
})
export class Actualizador {


  public elemento: Elemento []=[];
  constructor() {}

  ngOnInit(): void {
    // Aquí puedes realizar alguna acción al inicializar el componente
  }
}
