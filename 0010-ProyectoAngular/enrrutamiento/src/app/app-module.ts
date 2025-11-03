import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Historia } from './historia/historia';
import { Productos } from './productos/productos';
import { Servicios } from './servicios/servicios';
import { Proyectos } from './proyectos/proyectos';
import { Cliente } from './cliente/cliente';
import { JefesYrrhh } from './jefesYrrhh/jefesYrrhh';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';    //Para la carga del decorado bootstrap
import { ComponenteSegundo } from './productos/componenteSegundo/componenteSegundo';
import { ComponenteTercero } from './productos/componenteTercero/componenteTercero';
import { ComponentePrimero } from './productos/componentePrimero/componentePrimero';
import { StockVariante } from './productos/services/stockVariante';
import { Actualizador } from './productos/actualizador/actualizador';


//Se han declarado las importaciones encima de esta frase 29 de octubre 2025 a las 11:00 horas
const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'productos', component: Productos },
  { path: 'servicios', component: Servicios },
  { path: 'proyectos', component: Proyectos },
  { path: 'cliente', component: Cliente },
  { path: 'jefesYrrhh', component: JefesYrrhh },
  { path: 'actualizador', component: Actualizador }
];

@NgModule({
  declarations: [
    App,
    Home,
    Historia,
    Productos,
    Servicios,
    Proyectos,
    Cliente,
    JefesYrrhh,
    ComponenteSegundo,
    ComponenteTercero,
    ComponentePrimero,
    Actualizador
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    StockVariante
  ],
  bootstrap: [App]
})
export class AppModule { }
