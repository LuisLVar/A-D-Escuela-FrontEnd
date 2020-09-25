import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAlumnoComponent } from './inscripcion-alumno.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Seccion } from '../../models/Seccion';
import { Alumno } from '../../models/alumnos';
describe('InscripcionAlumnoComponent', () => {
  let component: InscripcionAlumnoComponent;
  let fixture: ComponentFixture<InscripcionAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionAlumnoComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*describe('Testing variables globales', () => {

    describe('Pruebas a variable component.newAlumno para verificar estado inicial', () => {
      it('Prueba para newAlumno.alumno debe ser 0 para validar', () => {
        expect(component.newAlumno.alumno).toEqual(0);
      });
      it("Prueba para newAlumno.nombre debe ser = '' ", () => {
        expect(component.newAlumno.nombre).toEqual('');
      });
      it("Prueba para newAlumno.apellido debe ser = '' ", () => {
        expect(component.newAlumno.apellido).toEqual('');
      });
      it("Prueba para newAlumno.direccion debe ser = '' ", () => {
        expect(component.newAlumno.direccion).toEqual('');
      });
      it("Prueba para newAlumno.telefono debe ser = 0 ", () => {
        expect(component.newAlumno.telefono).toEqual(0);
      });
      it("Prueba para newAlumno.cui debe ser = 0 ", () => {
        expect(component.newAlumno.cui).toEqual(0);
      });
      it("Prueba para newAlumno.encargado debe ser = '' ", () => {
        expect(component.newAlumno.encargado).toEqual('');
      });
      it("Prueba para newAlumno.fecha_nacimiento debe ser = null ", () => {
        expect(component.newAlumno.fecha_nacimiento).toBeNull();
      });
    });
    describe('Pruebas a variable component.newIns para verificar estado inicial', () => {
      it('Prueba para newIns.alumno debe ser 0 para validar', () => {
        expect(component.newIns.alumno).toEqual(0);
      });
      it("Prueba para newIns.seccion debe ser = '' ", () => {
        expect(component.newIns.seccion).toEqual(0);
      });
      it("Prueba para newIns.fecha debe ser = null ", () => {
        expect(component.newIns.fecha).toBeNull();
      });
      
    });

  });

  describe('Testing para funciones', () => {
    describe('Testing a funcion Obtener_Alumno', () => {
      it("Debe cambiar los atributos de Seccion_Ciclo a ciclo=2 y nombre=WW", () => {
        let valor_prueba = {
          seccion: 30,
          alumno: 20,
          fecha: new Date()
        };
        component.ObtenerIns(valor_prueba);
        it('Prueba para newIns.alumno debe ser 30 para validar', () => {
          expect(component.newIns.alumno).toEqual(30);
        });
        it("Prueba para newIns.seccion debe ser = 20 ", () => {
          expect(component.newIns.seccion).toEqual(20);
        });
      });
    });
  });*/
});
