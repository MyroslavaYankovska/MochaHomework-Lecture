// Якщо тест зафейлився, Сайпрес його сам перезапусте
/// <reference types="cypress"/>

it('Test1', { retries: 2}, () => { // кількість повторів у випадку якщо тест зафейлився 
  cy.visit('https://google.com/');
  cy.get('input.gLFyf').type('Cypress');
})

//Ще один запис
it('Test1', { retries: 2}, () => { 
  this.retries(2);
  cy.visit('https://google.com/');
  cy.get('input.gLFyf').type('Cypress');
})