import { Given, When, Then, Before } from 'cucumber';
import { InscripcionAlumnos } from '../app.po';
import { expect } from 'chai';

let insAlumnos: InscripcionAlumnos;

Before (() =>{
  insAlumnos = new InscripcionAlumnos();
})

Given('que se encuentre en la pagina de colores', async function () {
    await insAlumnos.navigateTo();
});

When('presione el boton de color y escoga un nuevo color', async function () {
    await insAlumnos.btnNuevo.click();
    await insAlumnos.setValuesCrear('#eee');
    expect(await insAlumnos.codigoAlumno.getAttribute('value')).to.equal('#eee');
});

Then('Presionar el boton de guardar para que el valor se mande y se limpia', async function () {
    await insAlumnos.btnGuardar.click();
    expect(await insAlumnos.codigoAlumno.getAttribute('value')).to.equal('');
});
