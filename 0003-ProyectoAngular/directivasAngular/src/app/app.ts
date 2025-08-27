import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  private titulo = "Registro de usuarios";
  private mensaje= "Usuario registrado";
  private registrado= false;
  public alumnas:string[]=["Rasselín","Vitrea","Emiliam","Verduliz","Veddina","Samira","Shail","Jill","Christal"];

  public setRegistro()
  {
    this.registrado=true;
  }
  public setNoRegistro()
  {
    this.registrado=false;
  }
  public getRegistro()
  {
    return this.registrado;
  }
  public getTitulo()
  {
    return this.titulo;
  }
  public setMensaje(mensaje:string)
  {
    this.mensaje=mensaje;
  }
  public getMensajeRegistrado()
  {
    this.setMensaje("Usuario SI registrado con exito");
    return this.mensaje;
  }
  public getMensajeNoRegistrado()
  {
    this.setMensaje("Usuario NO registrado con exito");
    return this.mensaje;
  }
}
