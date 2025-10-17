import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComponenteSegundo } from './componenteSegundo/componenteSegundo';
import { ComponenteTercero } from './componenteTercero/componenteTercero';
import { ComponentePrimero } from './componentePrimero/componentePrimero';

@NgModule({
  declarations: [
    App,
    ComponenteSegundo,
    ComponenteTercero,
    ComponentePrimero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
