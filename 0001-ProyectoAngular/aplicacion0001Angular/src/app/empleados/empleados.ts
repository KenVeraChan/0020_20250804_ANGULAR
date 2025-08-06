import { Component,signal } from "@angular/core";
@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.html',
    styleUrls: ['./empleados.css'],     //Es una matriz de estilos porque puede haber varios archivos de estilos  
    standalone: false  //Si se usa standalone, no es necesario importar este componente
})
export class Empleados {
     nombre="Rasselin";
     apellidos="Wissangel Rousher";
     edad=21;
     empresa="Sfer4D Corporation";
     fechaNacimiento=new Date(2004, 7, 15);

    //Constructor sería asi
    constructor(){
        //Inicialización de variables o servicios si es necesario
    }
    public setNombre(nombre: string):void
    {
        this.nombre=nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setApellidos(apellidos: string):void
    {
        this.apellidos=apellidos;
    }
    public getApellidos(): string {
        return this.apellidos;
    }
    public setEdad(edad: number):void
    {
        this.edad=edad;
    }
    public getEdad(): number {
        return this.edad;
    }
    public setEmpresa(empresa: string):void
    {
        this.empresa=empresa;
    }
    public getEmpresa(): string {
        return this.empresa;
    }
    public setFechaNacimiento(fechaNacimiento: Date):void
    {
        this.fechaNacimiento=fechaNacimiento;
    }
    public getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }
    llamaEmpresa(value:String)
    {

    }
    habilitacionCuadro=true; //Variable para habilitar o deshabilitar el cuadro de texto
    //Método para habilitar o deshabilitar el cuadro de texto
    usuarioRegistrado=false; //Variable para indicar si el usuario está registrado
    getUsuarioRegistrado()
    {
        this.usuarioRegistrado=false;
    }

}