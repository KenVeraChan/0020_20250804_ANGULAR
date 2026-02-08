import { Component } from '@angular/core';
import { LibroModeloComponent } from './libro-modelo/libro-modelo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibroModeloComponent],
  template: '<app-libro-modelo></app-libro-modelo>',
  styles: [],
})
export class AppComponent {}
