import { TestBed } from '@angular/core/testing';

import { StockVariante } from './stockVariante';

describe('StockVariante', () => {
  let service: StockVariante;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockVariante);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
