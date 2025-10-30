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
    public setNombre(nombre: string){
        this.nombre=nombre;
        this.total= this.cantidad*this.precio;
    }
    public setCantidad(cantidad: number){
        this.cantidad=cantidad;
        this.total= this.cantidad*this.precio;
    }
    public setPrecio(precio: number){
        this.precio=precio;
        //Por consecuencia se cambia el precio final tras cambiar el precio o el numero de unidades
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
export class proyectosEmpresariales
{
    nombre: string="";
    descripcion: string="";
    fechaInicio: Date=new Date();
    fechaFin: Date=new Date();
    presupuesto: number=0.0;

    constructor(nombre: string, descripcion: string, fechaInicio: Date, fechaFin: Date, presupuesto: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.presupuesto = presupuesto;
    }
}
export class productosEmpresariales
{
    nombre: string="";
    descripcion: string="";
    precio: number=0.0;
    stock: number=0;    

    constructor(nombre: string, descripcion: string, precio: number, stock: number)
    {   
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;        
    }   
}
export class serviciosEmpresariales
{
    nombre: string="";
    descripcion: string="";
    duracionHoras: number=0;
    precio: number=0.0;
    constructor(nombre: string, descripcion: string, duracionHoras: number, precio: number)
    {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracionHoras = duracionHoras;
        this.precio = precio;
    }
}