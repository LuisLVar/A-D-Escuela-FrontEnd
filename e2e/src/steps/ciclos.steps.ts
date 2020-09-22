import { Given, When, Then, Before } from 'cucumber';
import { CrudCiclos } from '../app.po';
import { expect } from 'chai';


// Crear CrudCiclos en app.po

let crudCiclos: CrudCiclos;

Before (() =>{
  crudCiclos = new CrudCiclos();
})

Given('que se encuentre en la pagina de ciclos y presione el boton de crear nuevo ciclo', async function () {
    await crudCiclos.navigateTo();
});

When('coloque el ciclo a agregar y presione el boton guardar', async function () {
    await crudCiclos.btnNuevoCiclo.click();
    await crudCiclos.setValuesCrear('2010');
    expect(await crudCiclos.codigoCiclo.getAttribute('value')).to.equal('2010');
});

Then('se limpia el campo y guarda el dato en base de datos', async function () {
    await crudCiclos.btnGuardar.click();
    expect(await crudCiclos.codigoCiclo.getAttribute('value')).to.equal('');
});
