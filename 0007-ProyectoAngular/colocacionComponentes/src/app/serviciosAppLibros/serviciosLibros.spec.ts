import { TestBed } from '@angular/core/testing';

import { ServiciosLibros } from './servicios-libros';

describe('ServiciosLibros', () => {
  let service: ServiciosLibros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosLibros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
