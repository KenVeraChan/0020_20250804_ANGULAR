import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PaginaState {
  titulo: string;
  mostrarBoton: boolean;
  rotado: boolean;
  decolorado: boolean;
  invisible: boolean;
  zIndex: number;
}

@Component({
  selector: 'app-libro-modelo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-modelo.component.html',
  styleUrl: './libro-modelo.component.css',
})
export class LibroModeloComponent implements AfterViewInit {
  @ViewChild('libroAbierto') libroAbierto!: ElementRef<HTMLElement>;

  paginaMovimiento = 0;
  guardaPagina = 0;
  mostrarBotonAbrir = true;

  paginas: PaginaState[] = [
    { titulo: 'Vida de Rasselín Wissangel Rousher', mostrarBoton: true, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Vitrea Horíz', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Emiliam Bastreriz', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Verdulíz Sainz', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Veddina Henion', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Samira Sávadez', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Shail Matsiz', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Christal Gedishen', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
    { titulo: 'Vida de Jill Anherson', mostrarBoton: false, rotado: false, decolorado: false, invisible: false, zIndex: 0 },
  ];

  ngAfterViewInit(): void {
    const total = this.paginas.length;
    this.paginas.forEach((p, index) => {
      p.zIndex = total - index;
    });
  }

  onPaginaClick(index: number, event: MouseEvent): void {
    const el = this.libroAbierto?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const posicionX = event.clientX;
    const limiteDerecho = rect.left + rect.width / 2;
    const limiteIzquierdo = rect.left;

    if (posicionX >= limiteDerecho && posicionX <= rect.right) {
      // Pasa a la página siguiente (clic en la derecha)
      const p = this.paginas[index];
      p.rotado = !p.rotado;
      p.decolorado = !p.decolorado;
      p.invisible = !p.invisible;
      if (index === this.paginaMovimiento) {
        this.mostrarBotonAbrir = !this.mostrarBotonAbrir;
      }
      this.guardaPagina = this.paginaMovimiento;
      this.paginaMovimiento++;
      p.zIndex = this.paginas.length + this.paginaMovimiento;
    } else if (posicionX < limiteDerecho && posicionX >= limiteIzquierdo) {
      // Pasa a la página anterior (clic en la izquierda)
      const p = this.paginas[index];
      p.rotado = !p.rotado;
      p.decolorado = !p.decolorado;
      p.invisible = !p.invisible;
      this.paginaMovimiento--;
      if (this.guardaPagina === this.paginaMovimiento) {
        this.mostrarBotonAbrir = !this.mostrarBotonAbrir;
      }
      p.zIndex = this.paginas.length - this.paginaMovimiento;
    }

    alert(`Página número: ${this.paginaMovimiento} Pagina guardada: ${this.guardaPagina}`);
  }
}
