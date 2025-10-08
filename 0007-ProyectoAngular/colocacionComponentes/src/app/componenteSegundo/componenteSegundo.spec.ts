import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSegundo } from './componente-segundo';

describe('ComponenteSegundo', () => {
  let component: ComponenteSegundo;
  let fixture: ComponentFixture<ComponenteSegundo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteSegundo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSegundo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
