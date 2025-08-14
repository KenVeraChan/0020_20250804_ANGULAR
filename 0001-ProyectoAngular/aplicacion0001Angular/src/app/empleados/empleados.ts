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
     empresa="Alien";
     fechaNacimiento=new Date(2004, 7, 15);
     contador=0;
    
     cambiaEmpresa(event: Event) 
     {
        this.empresa= (<HTMLInputElement>event.target).value; //Actualiza la empresa con el valor del input
     }
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
    habilitacionCuadro=false; //Variable para habilitar o deshabilitar el cuadro de texto
    //Método para habilitar o deshabilitar el cuadro de texto
    usuarioRegistrado=false; //Variable para indicar si el usuario está registrado
    usuarioNoRegistrado=true; //Variable para indicar si el usuario está registrado

    public getUsuarioRegistrado()
    {
        this.usuarioRegistrado=false;
    }
    public getUsuarioNoRegistrado()
    {
        this.usuarioNoRegistrado=true; 
    }

    textoDeRegistro="No hay ningún usuario registrado"; //Variable para el texto de registro

    public setUsuarioRegistrado()
    {
        alert("Usuario registrado correctamente");
        this.textoDeRegistro="Usuario registrado!"; //Variable para el texto de registro
        this.usuarioRegistrado=true; //Variable para indicar si el usuario está registrado
        this.usuarioNoRegistrado=false; //Variable para indicar si el usuario está registrado
    }
    public setUsuarioNoRegistrado()
    {
        alert("Usuario no registrado");
        this.textoDeRegistro="No hay ningún usuario registrado!"; //Variable para el texto de registro
        this.usuarioRegistrado=false; //Variable para indicar si el usuario está registrado
        this.usuarioNoRegistrado=true; //Variable para indicar si el usuario está registrado
    }
    textoDeNacionalidad="Sin nacionalidad elegida"; //Variable para el texto de nacionalidad
    elegir=true; //Variable por defecto para elegir la nacionalidad
    nacionalidadEspanola=false; //Variable para indicar si la nacionalidad es española
    nacionalidadFrancesa=false; //Variable para indicar si la nacionalidad es francesa
    nacionalidadInglesa=false; //Variable para indicar si la nacionalidad es inglesa
    nacionalidadItaliana=false; //Variable para indicar si la nacionalidad es italiana
    nacionalidadPortuguesa=false; //Variable para indicar si la nacionalidad es portuguesa
    public setNacionalidadExtranjera(event: Event)
    {
        if((<HTMLInputElement>event.target).value=="espanola")
        {
            this.elegir=false; //Variable por defecto para elegir la nacionalidad
            this.nacionalidadEspanola=true; //Variable para indicar si la nacionalidad es española
            this.nacionalidadFrancesa=false; //Variable para indicar si la nacionalidad es francesa
            this.nacionalidadInglesa=false; //Variable para indicar si la nacionalidad es inglesa
            this.nacionalidadItaliana=false; //Variable para indicar si la nacionalidad es italiana
            this.nacionalidadPortuguesa=false; //Variable para indicar si la nacionalidad es portuguesa 
            this.textoDeNacionalidad="La nacionalidad del usuario es ESPAÑOLA"; //Variable para el texto de registro
        }
        if((<HTMLInputElement>event.target).value=="francesa")
        {
            this.elegir=false; //Variable por defecto para elegir la nacionalidad
            this.nacionalidadEspanola=false; //Variable para indicar si la nacionalidad es española
            this.nacionalidadFrancesa=true; //Variable para indicar si la nacionalidad es francesa
            this.nacionalidadInglesa=false; //Variable para indicar si la nacionalidad es inglesa
            this.nacionalidadItaliana=false; //Variable para indicar si la nacionalidad es italiana
            this.nacionalidadPortuguesa=false; //Variable para indicar si la nacionalidad es portuguesa 
            this.textoDeNacionalidad="La nacionalidad del usuario es FRANCESA"; //Variable para el texto de registro 
        }
        if((<HTMLInputElement>event.target).value=="inglesa")
        {
            this.elegir=false; //Variable por defecto para elegir la nacionalidad
            this.nacionalidadEspanola=false; //Variable para indicar si la nacionalidad es española
            this.nacionalidadFrancesa=false; //Variable para indicar si la nacionalidad es francesa
            this.nacionalidadInglesa=true; //Variable para indicar si la nacionalidad es inglesa
            this.nacionalidadItaliana=false; //Variable para indicar si la nacionalidad es italiana
            this.nacionalidadPortuguesa=false; //Variable para indicar si la nacionalidad es portuguesa
            this.textoDeNacionalidad="La nacionalidad del usuario es INGLESA"; //Variable para el texto de registro  
        }
        if((<HTMLInputElement>event.target).value=="italiana")
        {
            this.elegir=false; //Variable por defecto para elegir la nacionalidad
            this.nacionalidadEspanola=false; //Variable para indicar si la nacionalidad es española
            this.nacionalidadFrancesa=false; //Variable para indicar si la nacionalidad es francesa
            this.nacionalidadInglesa=false; //Variable para indicar si la nacionalidad es inglesa
            this.nacionalidadItaliana=true; //Variable para indicar si la nacionalidad es italiana
            this.nacionalidadPortuguesa=false; //Variable para indicar si la nacionalidad es portuguesa
            this.textoDeNacionalidad="La nacionalidad del usuario es ITALIANA"; //Variable para el texto de registro  
        }
        if((<HTMLInputElement>event.target).value=="portuguesa")
        {
            this.elegir=false; //Variable por defecto para elegir la nacionalidad
            this.nacionalidadEspanola=false; //Variable para indicar si la nacionalidad es española
            this.nacionalidadFrancesa=false; //Variable para indicar si la nacionalidad es francesa
            this.nacionalidadInglesa=false; //Variable para indicar si la nacionalidad es inglesa
            this.nacionalidadItaliana=false; //Variable para indicar si la nacionalidad es italiana
            this.nacionalidadPortuguesa=true; //Variable para indicar si la nacionalidad es portuguesa 
            this.textoDeNacionalidad="La nacionalidad del usuario es PORTUGUESA"; //Variable para el texto de registro 
        }

    }
}