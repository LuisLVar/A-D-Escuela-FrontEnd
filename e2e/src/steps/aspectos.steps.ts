import { Given, When, Then, Before } from 'cucumber';
import { CrudAspectos } from '../app.po';
import {expect} from 'chai';


let aspectos: CrudAspectos;

Before (() =>{
    aspectos = new CrudAspectos();
})

Given('que se encuentre en la pagina de aspectos', async function () {
   await aspectos.navigateTo();
});

When('presione el boton de crear aspecto y escriba un nuevo aspecto', async function () {
    await aspectos.btnNuevo.click();
    await aspectos.setValuesCrear('Colaboracion');
    expect(await aspectos.nombre_aspecto.getAttribute('value')).to.equal('Colaboracion');

});

Then('Presionar el boton de guardar y que se mande a la base de dato', async function () {
    await aspectos.btnGuardar.click();
    expect(await aspectos.nombre_aspecto.getAttribute('value')).to.equal('');
});
