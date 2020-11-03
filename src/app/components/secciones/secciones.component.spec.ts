import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesComponent } from './secciones.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Seccion } from '../../models/Seccion';
describe('SeccionesComponent', () => {
  let component: SeccionesComponent;
  let fixture: ComponentFixture<SeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionesComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.newSeccion para verificar estado inicial', () => {
      it('Prueba para newSeccion.seccion debe ser 0 para validar', () => {
        expect(component.newSeccion.seccion).toEqual(0);
      });
      it("Prueba para newSeccion.nombre debe ser = '' ", () => {
        expect(component.newSeccion.nombre).toEqual('');
      });
      it("Prueba para newSeccion.estado debe ser = 1 ", () => {
        expect(component.newSeccion.estado).toEqual(1);
      });
      it("Prueba para newSeccion.grado debe ser = 1 ", () => {
        expect(component.newSeccion.grado).toEqual(1);
      });
      it("Prueba para newSeccion.personal debe ser = 1 ", () => {
        expect(component.newSeccion.personal).toEqual(1);
      });
      it("Prueba para newSeccion.ciclo debe ser = 1 ", () => {
        expect(component.newSeccion.ciclo).toEqual(1);
      });
    });

  });
  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.updateSeccion para verificar estado inicial', () => {
      it('Prueba para newGrado.seccion debe ser 0 para validar', () => {
        expect(component.updateSeccion.seccion).toEqual(0);
      });
      it("Prueba para updateSeccion.nombre debe ser = '' ", () => {
        expect(component.updateSeccion.nombre).toEqual('');
      });
      it("Prueba para updateSeccion.estado debe ser = 1 ", () => {
        expect(component.updateSeccion.estado).toEqual(1);
      });
      it("Prueba para updateSeccion.grado debe ser = 1 ", () => {
        expect(component.updateSeccion.grado).toEqual(1);
      });
      it("Prueba para updateSeccion.personal debe ser = 1 ", () => {
        expect(component.updateSeccion.personal).toEqual(1);//
      });
      it("Prueba para updateSeccion.ciclo debe ser = 1 ", () => {
        expect(component.updateSeccion.ciclo).toEqual(1);
      });
    });

  });

  describe('Testing para funciones', () => {
    describe('Testing a funcion Obtener_Item', () => {
      it("Debe cambiar los atributos de Seccion_Ciclo a ciclo=2 y nombre=WW", () => {
        let valor_prueba = {
          seccion: 0,
          nombre: 'WW',
          estado: 1,
          seccion_grado: 1,
          seccion_personal: 1,
          seccion_ciclo: 2
        };
        component.ObtenerSeccion(valor_prueba);
        expect(component.updateSeccion.ciclo).toEqual(2);
        expect(component.updateSeccion.nombre).toEqual('WW');
      });
    });
  });


});
