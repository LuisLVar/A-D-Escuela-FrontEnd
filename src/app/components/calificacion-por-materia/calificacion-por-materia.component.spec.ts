import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionPorMateriaComponent } from './calificacion-por-materia.component';

describe('CalificacionPorMateriaComponent', () => {
  let component: CalificacionPorMateriaComponent;
  let fixture: ComponentFixture<CalificacionPorMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionPorMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionPorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
