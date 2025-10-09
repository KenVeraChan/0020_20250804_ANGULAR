import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComponenteSegundo } from './componenteSegundo/componenteSegundo';
import { ComponenteTercero } from './componenteTercero/componenteTercero';
import { ServicioEscritores } from './servicio-escritores';

@NgModule({
  declarations: [
    App,
    ComponenteSegundo,
    ComponenteTercero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    ServicioEscritores
  ],
  bootstrap: [App]
})
export class AppModule { }
