export class Elemento{
    nombre: string="";
    cantidad: number=0;
    precio: number=0;
    total: number=0.0;
    
    constructor(nombre: string, cantidad: number, precio: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.total= this.cantidad*this.precio;
    }
}
export class Personas{
    nombre: string="";
    apellido: string="";
    edad: number=0;
    profesion: string="";

    constructor(nombre: string, apellido: string, edad: number, profesion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }
}
export class Libros{
    titulo: string="";
    autor: string="";
    anio: number=0;
    genero: string="";
    isbn: string="";
    
    constructor(titulo: string, autor: string, anio: number, genero: string, isbn: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
        this.isbn = isbn;
    }
}