import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  private title = 'Calculadora en Angular';
   numeroPrimero:number=0;  //Primer numero de tipo number, inicializado a 0
   numeroSegundo:number=0; //Segundo numero de tipo number, inicializado a 0
   resultado:number=0; //Resultado de tipo number, inicializado a 0

  //Devolver numeros
  getNumeroPrimero():number
  {
    return this.numeroPrimero;
  }
  getNumeroSegundo():number
  {
    return this.numeroSegundo;
  }
  //Metodo para mostrar el titulo
  mostrarTitulo():string{
    return this.title;
  }
  //Metodo para sumar los dos numeros
  sumar():void {
    this.resultado = this.numeroPrimero + this.numeroSegundo;
  } 
  //Metodo para restar los dos numeros
  restar():void {
    this.resultado = this.numeroPrimero - this.numeroSegundo;
  }
  //Metodo para multiplicar los dos numeros
  multiplicar():void {  
    this.resultado = this.numeroPrimero * this.numeroSegundo;
  } 
  //Metodo para dividir los dos numeros
  dividir():void {
    if (this.numeroSegundo !== 0) {
      this.resultado = this.numeroPrimero / this.numeroSegundo;
    } else {
      console.error('Error: División por cero no permitida.');
      this.resultado = NaN; // Asignar NaN si se intenta dividir por cero
    }
  }
}
