import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionComponent } from './inscripcion.component';
import { Alumno } from 'src/app/models/alumnos';
import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('InscripcionComponent', () => {
  let component: InscripcionComponent;
  let fixture: ComponentFixture<InscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Testing variable Globales', ()=>{
    describe('Prueba para variable new Alumno', ()=>{
      it('verificar los valores iniciales', ()=>{
        expect(component.newAlumno.alumno).toEqual(0);
        expect(component.newAlumno.nombre).toEqual('');
        expect(component.newAlumno.apellido).toEqual('');
        expect(component.newAlumno.direccion).toEqual('');
        expect(component.newAlumno.telefono).toEqual(0);
        expect(component.newAlumno.cui).toEqual(0);
        expect(component.newAlumno.encargado).toEqual('');
        expect(component.newAlumno.fecha_nacimiento).toEqual(null);
        expect(component.newAlumno.estado).toEqual(1);
      });
    });

    describe('Prueba para variable updateAlumno',()=>{
      it('Verificar los valores iniciales', ()=>{
        expect(component.updateAlumno.alumno).toEqual(0);
        expect(component.updateAlumno.nombre).toEqual('');
        expect(component.updateAlumno.apellido).toEqual('');
        expect(component.updateAlumno.direccion).toEqual('');
        expect(component.updateAlumno.telefono).toEqual(0);
        expect(component.updateAlumno.cui).toEqual(0);
        expect(component.updateAlumno.encargado).toEqual('');
        expect(component.updateAlumno.fecha_nacimiento).toEqual(null);
        expect(component.updateAlumno.estado).toEqual(1);
      });
    });

    describe('Testing a funciones', ()=>{
      describe('Funciones obtener Alumno', ()=>{
        it('la variable updateAlumno debe tener los siguientes valores', ()=>{
          let var_alumno :Alumno ={
              alumno: 1,
              nombre: 'Fernando',
              apellido: 'Chajon',
              direccion: 'Ciudad Guatemala',
              telefono: 78849056,
              cui: 45,
              encargado: 'Ana',
              fecha_nacimiento: new Date('18/01/1998'),
              estado: 1
          }
          component.ObtenerAlumno(var_alumno);
          expect(component.updateAlumno.alumno).toEqual(1);
          expect(component.updateAlumno.nombre).toEqual('Fernando');
          expect(component.updateAlumno.apellido).toEqual('Chajon');
          expect(component.updateAlumno.direccion).toEqual('Ciudad Guatemala');
          expect(component.updateAlumno.telefono).toEqual(78849056);
          expect(component.updateAlumno.cui).toEqual(45);
          expect(component.updateAlumno.encargado).toEqual('Ana');
          //expect(component.updateAlumno.fecha_nacimiento).toBe(new Date('18/01/1998'));
          expect(component.updateAlumno.estado).toEqual(1);
        });
      });
    });


  });
});
