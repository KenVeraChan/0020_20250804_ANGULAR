import { TestBed } from '@angular/core/testing';

import { ServicioEscritores } from './servicio-escritores';

describe('ServicioEscritores', () => {
  let service: ServicioEscritores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEscritores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
