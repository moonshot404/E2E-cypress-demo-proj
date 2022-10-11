const { v4: uuidv4 } = require('uuid');

describe('payment', () => {
    it('user can sign up', () => {
        cy.visit('/');
        
        cy.findByRole('link', {  name: /don't have an account\? sign up/i}).click();
        cy.findByRole('textbox', {  name: /first name/i}).type('Jm');
        cy.findByRole('textbox', {  name: /last name/i}).type('Albasin');
        cy.findByRole('textbox', {  name: /username/i}).type('tester_404');
        cy.get('#password').type('tester404');
        cy.get('#confirmPassword').type('tester404');
        cy.get('[data-test="signup-submit"]').click();

    })
        
});