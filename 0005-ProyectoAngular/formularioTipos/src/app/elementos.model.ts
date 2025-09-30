export class Elemento{
    nombre: string="";
    cantidad: number=0;
    precio: number=0;
    
    constructor(nombre: string, cantidad: number, precio: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}