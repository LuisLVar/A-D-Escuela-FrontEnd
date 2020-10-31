import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalificacionComponent } from './registro-calificacion.component';

describe('RegistroCalificacionComponent', () => {
  let component: RegistroCalificacionComponent;
  let fixture: ComponentFixture<RegistroCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
