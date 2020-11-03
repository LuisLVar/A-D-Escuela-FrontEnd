import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAlumnoComponent } from './inscripcion-alumno.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Seccion } from '../../models/Seccion';
import { InscripAlumno} from '../../models/inscrip-alumnos'
fdescribe('Inscripcioninscripcion_AlumnoComponent', () => {
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

  describe('Testing variables globales', () => {

    describe('Pruebas a variable component.newInscripcion para verificar estado inicial', () => {
      it('Prueba para newInscripcion.inscripcion_alumno debe ser 0 para validar', () => {
        expect(component.newInscripcion.inscripcion_alumno).toEqual(0);
      });
      it("Prueba para newInscripcion.seccion debe ser = '' ", () => {
        expect(component.newInscripcion.inscripcion_seccion).toEqual(0);
      });
      it("Prueba para newInscripcion.fecha debe ser = null ", () => {
        expect(component.newInscripcion.fecha).toBe('');
      });
      
    });
    describe('Pruebas a variable idAlumno y idSeccion para verificar estado inicial', () => {
      it('Prueba para idAlumno debe ser 0 para validar', () => {
        expect(component.idAlumno).toEqual(0);
      });
      it("Prueba para idSeccion debe ser = 0 ", () => {
        expect(component.idSeccion).toEqual(0);
      });
      
    });

  });

  describe('Listas globales para consultas', () => {
        it('Prueba para inscripcion_alumnos debe ser != null ', () => {
          expect(component.alumnos).toBeDefined();
        });
        it("Prueba para secciones  debe ser != null  ", () => {
          expect(component.secciones).toBeDefined();
        });

    
  });
});
