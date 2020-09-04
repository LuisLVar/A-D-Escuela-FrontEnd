import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponent } from './personal.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { personal } from '../../models/personal';

fdescribe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.newPersonal para verificar estado inicial', () => {
      it('Prueba para newPersonal.seccion debe ser 0 para validar', () => {
        expect(component.newPersonal.personal).toEqual(0);
      });
      it("Prueba para newPersonal.nombre debe ser = '' ", () => {
        expect(component.newPersonal.nombre).toEqual('');
      });
      it("Prueba para newPersonal.apellido debe ser = '' ", () => {
        expect(component.newPersonal.apellido).toEqual('');
      });
      it("Prueba para newPersonal.direccion debe ser = '' ", () => {
        expect(component.newPersonal.direccion).toEqual('');
      });
      it("Prueba para newPersonal.telefono debe ser = '' ", () => {
        expect(component.newPersonal.telefono).toEqual('');
      });
      it("Prueba para newPersonal.estado debe ser = 1 ", () => {
        expect(component.newPersonal.estado).toEqual(1);
      });
      it("Prueba para newPersonal.personal_escuela debe ser = 1 ", () => {
        expect(component.newPersonal.personal_escuela).toEqual(1);
      });
      it("Prueba para newPersonal.tipo_personal debe ser = 1 ", () => {
        expect(component.newPersonal.tipo_personal).toEqual(1);
      });
      it("Prueba para newPersonal.usuario debe ser = '' ", () => {
        expect(component.newPersonal.usuario).toEqual('');
      });
      it("Prueba para newPersonal.contrasenia debe ser = '' ", () => {
        expect(component.newPersonal.contrasenia).toEqual('');
      });
    });

  });

  describe('Testing variables globales', () => {
    describe('Pruebas a variable component.updatePersonal para verificar estado inicial', () => {
      it('Prueba para updatePersonal.seccion debe ser 0 para validar', () => {
        expect(component.updatePersonal.personal).toEqual(0);
      });
      it("Prueba para updatePersonal.nombre debe ser = '' ", () => {
        expect(component.updatePersonal.nombre).toEqual('');
      });
      it("Prueba para updatePersonal.apellido debe ser = '' ", () => {
        expect(component.updatePersonal.apellido).toEqual('');
      });
      it("Prueba para updatePersonal.direccion debe ser = '' ", () => {
        expect(component.updatePersonal.direccion).toEqual('');
      });
      it("Prueba para updatePersonal.telefono debe ser = '' ", () => {
        expect(component.updatePersonal.telefono).toEqual('');
      });
      it("Prueba para updatePersonal.estado debe ser = 1 ", () => {
        expect(component.updatePersonal.estado).toEqual(1);
      });
      it("Prueba para updatePersonal.personal_escuela debe ser = 1 ", () => {
        expect(component.updatePersonal.personal_escuela).toEqual(1);
      });
      it("Prueba para updatePersonal.tipo_personal debe ser = 1 ", () => {
        expect(component.updatePersonal.tipo_personal).toEqual(1);
      });
      it("Prueba para updatePersonal.usuario debe ser = '' ", () => {
        expect(component.updatePersonal.usuario).toEqual('');
      });
      it("Prueba para updatePersonal.contrasenia debe ser = '' ", () => {
        expect(component.updatePersonal.contrasenia).toEqual('');
      });
    });

  });


  describe('Testing para funciones', () => {
    describe('Testing a funcion Obtener_Item', () => {
      it("Debe cambiar los atributos de Personal_nombre a nombre=juanita y apellido=Solis", () => {
        let valor_prueba:personal = {
          personal: 0,
          nombre: 'juanita',
          estado: 1,
          apellido: "Solis",
          tipo_personal: 1,
          personal_escuela: 1,
          telefono:'12345678',
          usuario:'user3',
          contrasenia:'user'
        };
        component.ObtenerPersonal(valor_prueba);
        expect(component.updatePersonal.nombre).toEqual('juanita');
        expect(component.updatePersonal.apellido).toEqual('Solis');
      });
    });
  });
});
