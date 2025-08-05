import { Component,signal } from "@angular/core";
@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.html',
    styleUrls: ['./empleados.css'],     //Es una matriz de estilos porque puede haber varios archivos de estilos  
    standalone: false  //Si se usa standalone, no es necesario importar este componente
})
export class Empleados {

}