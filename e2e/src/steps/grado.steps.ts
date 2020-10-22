import { Given, When, Then, Before } from 'cucumber';
import { CrudGrado } from '../app.po';
import {expect} from 'chai';

let crudGrado: CrudGrado;

Before (() =>{
    crudGrado = new CrudGrado();
})

Given('Que Me encuentre en la pagina de grados', async function () {
    await crudGrado.navigateTo();
});

When('presione el boton de nuevo_grado e ingrese un nuevo grado', async function () {
    await crudGrado.btnNuevo.click();
    await crudGrado.setValuesCrear('Primero Primaria');
    expect(await crudGrado.nombre_grado.getAttribute('value')).to.equal('Primero Primaria');
});

Then('Presionar el boton de guardar grado para que el valor se mande y se limpia', async function () {
    await crudGrado.btnGuardar.click();
    expect(await crudGrado.nombre_grado.getAttribute('value')).to.equal('');
});
