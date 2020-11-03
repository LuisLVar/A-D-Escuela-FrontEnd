import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEscolarComponent } from './ciclo-escolar.component';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {Ciclo} from 'src/app/models/ciclo-escolar.interface';

fdescribe('CicloEscolarComponent', () => {
  let component: CicloEscolarComponent;
  let fixture: ComponentFixture<CicloEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloEscolarComponent ],
      imports: [
        HttpClientTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Testing variables Globales',() =>{
    describe('Prueba para variable newCiclo para verificar el estado inicial', ()=>{
      it('newCiclo.ciclo debe ser 0 al iniciar el componente', ()=>{
        expect(component.newCiclo.ciclo).toEqual(0);
      });
      it('newCiclo.anio debe ser 0 al inicial el componente', ()=>{
        expect(component.newCiclo.anio).toEqual(-1);
      });
    });


    describe('Prueba para variable cicloOperacional para realizar operaciones de update y delete', ()=>{
      it('cicloOperacion.ciclo debe ser -1 al inicial el componenete', ()=>{
        expect(component.cicloOperacional.ciclo).toEqual(-1);
      });
      it('cicloOperacional.anio debe ser 0 al iniciar el componente', ()=>{
        expect(component.cicloOperacional.anio).toEqual(0);
      });
    });

  });

  describe('Testing a funciones', ()=>{
    describe('Prueba a funcion Obtener_ciclo()', ()=>{
      it('Debe cambiar los valores de cicloOperacional a ciclo=10 y anio=2020', ()=>{
        let valor_prueba: Ciclo = {ciclo:10, anio:2020};
        component.Obtener_Ciclo(valor_prueba);
        expect(component.cicloOperacional.ciclo).toEqual(10);
        expect(component.cicloOperacional.anio).toEqual(2020);
      });
    });

    describe('Prueba a funcion Establecer_Valores', ()=> {
      it('variable newCiclo debe tener ciclo=0 y anio=0', ()=>{
        component.Establecer_Valores();
        expect(component.newCiclo.ciclo).toEqual(0);
        expect(component.newCiclo.anio).toEqual(0);
      });
      it('variable cicloOperacion debe tener ciclo=-1 y anio=0', ()=>{
        component.Establecer_Valores();
        expect(component.cicloOperacional.ciclo).toEqual(-1);
        expect(component.cicloOperacional.anio).toEqual(0);
      });
    });
  });

});
