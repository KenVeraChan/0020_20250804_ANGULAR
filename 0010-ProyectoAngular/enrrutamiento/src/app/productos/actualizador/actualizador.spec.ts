import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizador } from './actualizador';

describe('Actualizador', () => {
  let component: Actualizador;
  let fixture: ComponentFixture<Actualizador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Actualizador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actualizador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
