import { TestBed } from '@angular/core/testing';

import { Avisador } from './avisador';

describe('Avisador', () => {
  let service: Avisador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Avisador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
