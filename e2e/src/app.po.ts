import { browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}

export class CrudGrado{

  nombre_grado: ElementFinder;
  btnGuardar: ElementFinder;
  btnNuevo: ElementFinder;


  constructor(){
    this.nombre_grado = element(by.id('nombre_grado'));
    this.btnGuardar = element(by.id('btnGuardar'));
    this.btnNuevo = element(by.id('nuevo_grado'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}grados`)
  }

  async setValuesCrear(nombre_grado: string){
    await this.nombre_grado.sendKeys(nombre_grado);
  }

}

export class CrudColores{

  codigoColor: ElementFinder;
  btnGuardar: ElementFinder;
  btnNuevo: ElementFinder;

  constructor(){
    this.codigoColor = element(by.id('color'));
    this.btnGuardar = element(by.id('btnGuardar'));
    this.btnNuevo = element(by.id('nuevo_color'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}color`)
  }

  async setValuesCrear(color: string){
    await this.codigoColor.sendKeys(color);
  }

}

<<<<<<< HEAD
export class CrudCiclos{

  codigoCiclo: ElementFinder;
  btnGuardar: ElementFinder;
  btnNuevoCiclo: ElementFinder;

  constructor(){
    this.codigoCiclo = element(by.id('ciclo'));
    this.btnGuardar = element(by.id('btnGuardar'));
    this.btnNuevoCiclo = element(by.id('btnNuevoCiclo'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}ciclos`)
  }

  async setValuesCrear(ciclo: string){
    await this.codigoCiclo.sendKeys(ciclo);
  }

}
=======
export class InscripcionAlumnos{

  codigoAlumno: ElementFinder;
  btnGuardar: ElementFinder;
  btnNuevo: ElementFinder;

  constructor(){
    this.codigoAlumno = element(by.id('NombreAlumno'));
    this.btnGuardar = element(by.id('btnCrearAlumno'));
    this.btnNuevo = element(by.id('btnNuevoAlumno'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}inscripcion`)
  }

  async setValuesCrear(alumno: string){
    await this.codigoAlumno.sendKeys(alumno);
  }

}

>>>>>>> feature/bb_alumnos
