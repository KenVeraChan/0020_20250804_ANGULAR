import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTercero } from './componenteTercero';

describe('ComponenteTercero', () => {
  let component: ComponenteTercero;
  let fixture: ComponentFixture<ComponenteTercero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteTercero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTercero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
