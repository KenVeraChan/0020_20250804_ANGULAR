import { Component, signal } from '@angular/core';
import { Elemento } from './elementos.model';
import { Personas } from './elementos.model';
import { Libros } from './elementos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  tituloGeneral='Listas Variadas'
  tituloElementos = 'lista de Frutas y Verduras';
  tituloPersonas = 'Lista de los Escritores presentados';
  tituloLibros= 'Lista de los libros de la Biblioteca'
  elementos: Elemento[] = [
    new Elemento("Manzanas", 5, 1.20),
    new Elemento("Naranjas", 3, 0.80),
    new Elemento("Plátanos", 6, 1.10)
  ];
  personas: Personas[]=
  [
    new Personas("Juan", "Pérez", 30, "Ingeniero"),
    new Personas("María", "Gómez", 25, "Diseñadora"),
    new Personas("Carlos", "López", 40, "Profesor")
  ];
  libros: Libros[]=
  [
    new Libros("Cien Años de Soledad", "Gabriel García Márquez", 1967, "Realismo Mágico", "978-3-16-148410-0"),
    new Libros("1984", "George Orwell", 1949, "Distopía", "978-0-452-28423-4"),
    new Libros("El Gran Gatsby", "F. Scott Fitzgerald", 1925, "Novela", "978-0-7432-7356-5")
  ];
  categoriasElegidas: string[]=["elementos","personas","libros"];

// Variables para el formulario
  cuadroNombre: string = "";
  cuadroCantidad: number = 0;
  cuadroPrecio: number = 0; 
  indiceMostrar: number=0;
  
  public agregarElemento()
  {
    if(this.cuadroCantidad > 0 && this.cuadroPrecio > 0) {
      const nuevoElemento = new Elemento(this.cuadroNombre,this.cuadroCantidad,this.cuadroPrecio);
      this.elementos.push(nuevoElemento);
    } 
  }
  public setIndiceMostrado(indice: number)
  {
    this.indiceMostrar = indice;
  }
  public getIndiceMostrado()
  {
    return this.indiceMostrar;
  }
  public mostrarValor()
  {
    if(document.getElementById("selector")===null)
    {
      this.indiceMostrar=0;
    }
    else
    {
      const elemento = document.getElementById("selector") as HTMLSelectElement;
      this.indiceMostrar = Number(elemento.value);
    }
  }
}
