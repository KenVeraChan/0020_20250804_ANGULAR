import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosLibros {
  Libro: Libro;
  constructor()
  {
    this.Libro = {
      titulo: "Cometido 4321",
      autor: "William Wissangel & Sharyllin Rousher",
      anioPublicacion: 2025,
      genero: "Novela de Ciencia Ficción",
      precio: 59.95,
      disponible: true,
      mostrarInfo(): string { return ''; },
      aplicarDescuento(descuento: number): number { return 0; }
    }
  }
  mostrarInfo(): string
  {
    return `Título: ${this.Libro.titulo}\nAutor: ${this.Libro.autor}\nAño de Publicación: ${this.Libro.anioPublicacion}\nGénero: ${this.Libro.genero}\nPrecio: $${this.Libro.precio.toFixed(2)}\nDisponible: ${this.Libro.disponible ? 'Sí' : 'No'}`;
  }
  aplicarDescuento(descuento: number): number
  {
    if (descuento < 0 || descuento > 100) {
      throw new Error("El descuento debe estar entre 0 y 100.");
    }
    const precioFinal = this.Libro.precio - (this.Libro.precio * descuento / 100);
    return precioFinal;
  }
}

// Definición de la interfaz Libro
export default interface Libro 
{
  titulo: string;
  autor: string;
  anioPublicacion: number;
  genero: string;
  precio: number;
  disponible: boolean;

  mostrarInfo(): string;   //Declaracion de métodos sin la expresion abstract de Java
  aplicarDescuento(descuento: number): number;
  }