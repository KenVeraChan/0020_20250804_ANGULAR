# Libro Modelo - Versión Angular

Esta es la misma aplicación "Libro Modelo" que la versión HTML5 + jQuery, reimplementada con **Angular 18** (componentes standalone).

## Requisitos

- Node.js 18+
- npm

## Imagen del libro

Copia la imagen del libro en la carpeta `public/images`:

```
copy ..\images\libroAbierto.png angular\public\images\
```

(O arrastra `libroAbierto.png` desde la carpeta `images` del proyecto raíz a `angular/public/images/`.)

## Instalación y ejecución

```bash
cd angular
npm install
npm start
```

Abre http://localhost:4200 en el navegador.

## Estructura

- `src/app/app.component.ts` – Componente raíz que carga el libro.
- `src/app/libro-modelo/` – Componente del libro (template, estilos y lógica equivalente a libroModelo.html, libroModelo.css y libroModelo.js).
- `public/images/` – Aquí debe estar `libroAbierto.png` para el fondo del libro.

## Comportamiento

Idéntico a la versión jQuery: clic en la **derecha** del libro pasa página; clic en la **izquierda** vuelve atrás. El botón "Abrir Libro" se oculta al pasar la primera página y reaparece al volver.
