// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  page = new AppPage();
});


Given('Que el usuario ingrese dos valores', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Presione el boton de sumar', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('Validar los dos valores y mostrar resultado', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});