import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoComponent } from './grado.component';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { Grado } from 'src/app/models/grado.interface';


describe('GradoComponent', () => {
  let component: GradoComponent;
  let fixture: ComponentFixture<GradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradoComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.newGrado para verificar el estado inicial',() =>{
        it('Prueba para newGrado.grado debe ser 0 para validar', ()=>{
            expect(component.newGrado.grado).toEqual(0);
        });

        it("Prueba para newGrado.nombre_grado debe ser = '' ", () =>{
          expect(component.newGrado.nombre_grado).toEqual('');
        });
    });

    describe('Prueba para component.Grado_Operacional para verificar el estado inicial', () => {
      it('Prueba para Grado_Operacion.grado debe ser -1', () =>{
        expect(component.Grado_Operacional.grado).toEqual(-1);
      });
      it("Prueba a Grado_Operacion.nombre_grado debe ser '' ", () => {
        expect(component.Grado_Operacional.nombre_grado).toEqual('');
      });
    });

  });

  describe('Testing para funciones', () =>{
    describe('Testing a funcion Obtener_Item', () =>{
      it("Debe cambiar los atributos de Grado_Operacional a grado=9 y nombre_grado=Primero Primaria", () =>{
        let valor_prueba: Grado = {grado: 9, nombre_grado: 'Primero Primaria'}
        component.Obtener_Item(valor_prueba);
        expect(component.Grado_Operacional.grado).toEqual(9);
        expect(component.Grado_Operacional.nombre_grado).toEqual('Primero Primaria');
      });
    });

    describe('Testing a funcion Establecer Valores, devuel a newGrado y Grado_Operacional a sus valores iniciales', ()=>{
      it("newGrado debe tener grado=0 y nombre_grado= '' y Grado_Operacional grado = -1 y nombre_grado ='' ", ()=>{
        component.Establecer_Valores();
        expect(component.newGrado.grado).toEqual(0);
        expect(component.newGrado.nombre_grado).toEqual('');
        expect(component.Grado_Operacional.grado).toEqual(-1);
        expect(component.Grado_Operacional.nombre_grado).toEqual('');
      });
    });

  });

});


