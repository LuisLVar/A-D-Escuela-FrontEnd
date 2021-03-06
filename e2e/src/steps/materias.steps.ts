import { Given, When, Then, Before } from 'cucumber';
import { CrudMateria } from '../app.po';
import {expect} from 'chai';

let crudMateria: CrudMateria;

Before (() =>{
    crudMateria = new CrudMateria();
})

Given('Que Me encuentre en la pagina de materia',{timeout: 2 * 5000}, async function () {
    await crudMateria.navigateTo();
});

When('presione el boton de nuevo_materia e ingrese un nueva materia',{timeout: 2 * 5000}, async function () {
    await crudMateria.btnNuevo.click();
    await crudMateria.setValuesCrear('Matematicas', 'Contenido');
    expect(await crudMateria.nombre_materia.getAttribute('value')).to.equal('Matematicas');
    expect(await crudMateria.contenido_materia.getAttribute('value')).to.equal('Contenido');
});

Then('Presionar el boton de guardar materia para que el valor se mande y se limpia',{timeout: 2 * 5000}, async function () {
    await crudMateria.btnGuardar.click();
    expect(await crudMateria.nombre_materia.getAttribute('value')).to.equal('');
    expect(await crudMateria.contenido_materia.getAttribute('value')).to.equal('');
});
