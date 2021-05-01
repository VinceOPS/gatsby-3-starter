/// <reference types="Cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('congratulates me for being able to run a command line', () => {
    cy.get('h1').should('have.text', 'Congratulations— you just made a Gatsby site! 🎉🎉🎉');
  });
});
