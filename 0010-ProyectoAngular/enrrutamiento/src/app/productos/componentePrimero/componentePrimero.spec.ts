import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrimero } from './componentePrimero';

describe('ComponentePrimero', () => {
  let component: ComponentePrimero;
  let fixture: ComponentFixture<ComponentePrimero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentePrimero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePrimero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
