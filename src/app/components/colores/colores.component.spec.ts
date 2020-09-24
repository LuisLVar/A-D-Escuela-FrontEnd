import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresComponent } from './colores.component';

describe('ColoresComponent', () => {
  let component: ColoresComponent;
  let fixture: ComponentFixture<ColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColoresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //TDD de colores
  describe('Valida que la variable colorcito sea de tipo string', () => {
    it('Valida que el valor de las variables sea tipo string.', () => {
      component.crearColor();
      expect(typeof component.colorcito).toEqual("string");
      expect(typeof component.descripcion).toEqual("string");
    });
  });


  describe('Valida que las variable no sean vacios', () => {
    it('Valida que el valor de las variables no sea vacio', () => {
      component.crearColor();
      expect(component.colorcito).not.toEqual("");
      expect(component.descripcion).not.toEqual("");
    });
  });

  describe('Valida que las variable sean vacios', () => {
    it('Valida que el valor de las variables sea vacio luego de crearlas', () => {
      component.confirmarColor();
      expect(component.colorcito == "").toBeTrue();
      expect(component.descripcion == "").toBeTrue();
    });
  });



});
