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

export class CrudAspectos{
  nombre_aspecto: ElementFinder;
  btnNuevo: ElementFinder;
  btnGuardar: ElementFinder

  constructor(){
    this.nombre_aspecto = element(by.id('nombre_aspecto'));
    this.btnGuardar = element(by.id('btnGuardar'));
    this.btnNuevo = element(by.id('nuevo_aspecto'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}aspecto`);
  }

  async setValuesCrear(aspecto: string){
    await this.nombre_aspecto.sendKeys(aspecto);
  }

}