import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefesYrrhh } from './jefesYrrhh';

describe('JefesYrrhh', () => {
  let component: JefesYrrhh;
  let fixture: ComponentFixture<JefesYrrhh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JefesYrrhh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JefesYrrhh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
