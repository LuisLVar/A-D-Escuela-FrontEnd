import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalificacionComponent } from './registro-calificacion.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('RegistroCalificacionComponent', () => {
  let component: RegistroCalificacionComponent;
  let fixture: ComponentFixture<RegistroCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCalificacionComponent ],
      imports: [
        HttpClientTestingModule
      ]
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
  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.newCalificacion para verificar estado inicial', () => {
      it('Prueba para newCalificacion.seccion debe ser 0 para validar', () => {
        expect(component.newCalificacion.alumno).toEqual(0);
      });
      it("Prueba para newCalificacion.nombre debe ser = '' ", () => {
        expect(component.newCalificacion.nombre).toEqual('');
      });
      it("Prueba para newCalificacion.apellido debe ser = '' ", () => {
        expect(component.newCalificacion.apellido).toEqual('');
      });
      it("Prueba para newCalificacion.cui debe ser = 0 ", () => {
        expect(component.newCalificacion.cui).toEqual(0);
      });
      it("Prueba para newCalificacion.bloque debe ser = 0 ", () => {
        expect(component.newCalificacion.bloque).toEqual(0);
      });
      it("Prueba para newCalificacion.proyecto debe ser = 0 ", () => {
        expect(component.newCalificacion.proyecto).toEqual(0);
      });
      it("Prueba para newCalificacion.zona debe ser = 0 ", () => {
        expect(component.newCalificacion.zona).toEqual(0);
      });
    });

  });
});
