import { Given, When, Then, Before } from 'cucumber';
import { CrudColores } from '../app.po';
import { expect } from 'chai';

let crudColor: CrudColores;

Before (() =>{
    crudColor = new CrudColores();
})

Given('que se encuentre en la pagina de colores',{timeout: 2 * 5000}, async function () {
    await crudColor.navigateTo();
});

When('presione el boton de color y escoga un nuevo color',{timeout: 2 * 5000}, async function () {
    await crudColor.btnNuevo.click();
    await crudColor.setValuesCrear('#eee');
    expect(await crudColor.codigoColor.getAttribute('value')).to.equal('#eee');
});

Then('presione el boton de guardar para que el valor se envia a la base de datos',{timeout: 2 * 5000}, async function () {
    await crudColor.btnGuardar.click();
    expect(await crudColor.codigoColor.getAttribute('value')).to.equal('');
});
