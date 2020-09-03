import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigMateriaComponent } from './asig-materia.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AsigMateria } from '../../models/asig_materia'

describe('AsigMateriaComponent', () => {
  let component: AsigMateriaComponent;
  let fixture: ComponentFixture<AsigMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigMateriaComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.gradito para verificar el estado inicial',() =>{
        it('Prueba para gradito.grado debe ser 0 para validar', ()=>{
            expect(component.gradito.grado).toEqual(0);
        });

        it("Prueba para gradito.nombre debe ser = '' ", () =>{
          expect(component.gradito.nombre_grado).toEqual('');
        });
    });

    describe('Prueba para component.materita para verificar el estado inicial', () => {
      it('Prueba para materita.materia debe ser 0', () =>{
        expect(component.materita.materia).toEqual(0);
      });
      it("Prueba a materita.nombre debe ser '' ", () => {
        expect(component.materita.nombre).toEqual('');
      });
      it("Prueba a materita.contenido debe ser '' ", () => {
        expect(component.materita.contenido).toEqual('');
      });
    });

  });

});
