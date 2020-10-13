import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionPorMateriaComponent } from './calificacion-por-materia.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CalificacionPorMateriaComponent', () => {
  let component: CalificacionPorMateriaComponent;
  let fixture: ComponentFixture<CalificacionPorMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionPorMateriaComponent ],
      imports: [
        HttpClientTestingModule
      ]
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

  it('Testin funcion Validar_Campo', ()=>{
    component.buscar = "Matematica";
    expect(component.Validar_Campo()).toBeTruthy();
  })
});
