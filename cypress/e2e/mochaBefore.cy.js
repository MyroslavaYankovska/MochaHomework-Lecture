//.only - запуститься той тест який ми хочемо
//.skip - пропускає тест який ми хочемо пропустити 

const { describe } = require("mocha");

describe('Using before method', () => { 

  before(()=> { // Pre condition (Before All) //запуститься 1 раз
    cy.visit('https://google.com/');
  })
  
  it.skip('Test1', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test2', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it.only('Test3', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test4', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');
  })
})

describe('Using before method', () => {
  beforeEach(()=> { //запуститься перед кожним тестом
    cy.visit('https://google.com/');
  })
  
  it('Test1', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test2', () => {
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test3', () => {
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test4', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
})


