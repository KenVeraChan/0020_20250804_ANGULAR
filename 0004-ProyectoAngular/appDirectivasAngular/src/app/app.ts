import { Component, signal } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  titulo = "Listado de empleados";
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  cuadroTexto="El usuario es: ";

  empleados:Empleado[]=
    [
      new Empleado("Rasselín","Wissangel Rousher","Presidenta",8500),
      new Empleado("Vitrea","Horiz","Inversora adjunta",5500),
      new Empleado("Emiliam","Bastreriz","Programadora",3500),
      new Empleado("Verdulíz","Sainz","Backend y Frontend",4000)
    ];
    public agregarEmpleado()
    {
      let empleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
      this.empleados.push(empleado);  //Se incluye en el array que se tenía de antes
    }
}
