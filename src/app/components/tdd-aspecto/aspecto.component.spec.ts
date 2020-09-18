import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoComponent } from '../aspectos/nombre';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('NavbarComponent', () => {
  let component: AspectoComponent;
  let fixture: ComponentFixture<AspectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectoComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Testing variables Globales', () =>{

    describe('Testing a variable componente.newAspecto', ()=>{
        it('Test para newAspecto.aspecto == 0', () =>{
            expect(component.newAspecto.aspecto).toEqual(0);
        })

        it("Test para newAspecto.nombre == '' ", () => {
            expect(component.newAspecto.nombre).toEqual('');
        })
    })

    describe('Testing a variable componente.updateAspecto', ()=>{
        it('Test para updateAspecto.aspecto == 0', () =>{
            expect(component.updateAspecto.aspecto).toEqual(0);
        })

        it("Test para updateAspecto.nombre == '' ", () => {
            expect(component.updateAspecto.nombre).toEqual('');
        })
    })

  });


  describe('Testing para funciones', () => {
        describe('Testing a funcion obtener_Item', () => {
            it('Cambia los datos de aspecto==2 y nombre=="Conducta" ', ()=>{
                let valor_prueba = {
                    aspecto: 2,
                    nombre: 'Conducta'
                };
                component.ObtenerAspecto(valor_prueba);
                expect(component.updateAspecto.aspecto).toEqual(2);
                expect(component.updateAspecto.nombre).toEqual('Conducta');
            })
        })
  });

});
