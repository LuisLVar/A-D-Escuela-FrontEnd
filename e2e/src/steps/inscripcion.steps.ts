import { Given, When, Then, Before } from 'cucumber';
import { CrudInscripcion } from '../app.po';
import {expect} from 'chai';

let CrudIns: CrudInscripcion;

Before (() =>{
    CrudIns = new CrudInscripcion();
})

Given('Me encuentre en la pagina de inscripcion',{timeout: 2 * 5000}, async function () {
    await CrudIns.navigateTo();
});

When('presione el boton de Nueva Inscripcion e ingrese una nueva seccion y alumno',{timeout: 2 * 5000}, async function () {
    await CrudIns.nuevo_insc.click();
    await CrudIns.setValuesCrear(3);
    expect(await CrudIns.alumno.getAttribute('value')).to.equal('');
});

Then('Presionar el boton de guardar para que el valor se mande',{timeout: 2 * 5000}, async function () {
    await CrudIns.btnGuardar.click();
    expect(await CrudIns.alumno.getAttribute('value')).to.equal('');
});
