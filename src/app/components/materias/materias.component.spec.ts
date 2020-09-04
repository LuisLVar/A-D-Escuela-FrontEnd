import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasComponent } from './materias.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MateriasComponent', () => {
  let component: MateriasComponent;
  let fixture: ComponentFixture<MateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.newMateria para verificar el estado inicial',() =>{
        it('Prueba para newMateria.materia debe ser 0 para validar', ()=>{
            expect(component.newMateria.materia).toEqual(0);
        });
        it("Prueba para newMateria.nombre debe ser = '' ", () =>{
          expect(component.newMateria.nombre).toEqual('');
        });
        it("Prueba para newMateria.contenido debe ser = '' ", () =>{
          expect(component.newMateria.contenido).toEqual('');
        });
    });

    describe('Pruebas a variable component.updateMateria para verificar el estado inicial',() =>{
      it('Prueba para updateMateria.materia debe ser 0 para validar', ()=>{
          expect(component.updateMateria.materia).toEqual(0);
      });
      it("Prueba para updateMateria.nombre debe ser = '' ", () =>{
        expect(component.updateMateria.nombre).toEqual('');
      });
      it("Prueba para updateMateria.contenido debe ser = '' ", () =>{
        expect(component.updateMateria.contenido).toEqual('');
      });
  });

  });

  describe('Testing a funciones', ()=>{
    describe('Prueba a funcion ObtenerMateria()', ()=>{
      it('Debe cambiar los valores de updateMateria a materia=25, nombre="Ciencia" y contenido="Ecuaciones diferenciales"', ()=>{
        component.ObtenerMateria({materia:25, nombre:"Ciencia", contenido:"Ecuaciones diferenciales"});
        expect(component.updateMateria.nombre).toEqual("Ciencia");
        expect(component.updateMateria.materia).toEqual(25);
        expect(component.updateMateria.contenido).toEqual("Ecuaciones diferenciales");
      });
    });

    describe('Prueba a funcion Establecer_Valores()', ()=> {
      it('variable newMateria debe tener materia=0 y nombre="" y contenido=""', ()=>{
        component.Establecer_Valores();
        expect(component.newMateria.materia).toEqual(0);
        expect(component.newMateria.nombre).toEqual('');
        expect(component.newMateria.contenido).toEqual('');
      });
    });
  });

});
