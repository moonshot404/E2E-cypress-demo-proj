describe('signup',() => {
    it('user can sign up', () => {
        cy.visit('/');
        cy.findByRole('link', {  name: /don't have an account\? sign up/i}).click();
        cy.findByRole('textbox', {  name: /first name/i}).type('Jm');
        cy.findByRole('textbox', {  name: /last name/i}).type('Albasin');
        cy.findByRole('textbox', {  name: /username/i}).type('jync11');
        cy.get('#password').type('tester123');
        cy.get('#confirmPassword').type('tester123');

        cy.get('[data-test="signup-submit"]').click();

        cy.findByRole('textbox', {  name: /username/i}).type('jync11');
        cy.findByLabelText(/password/i).type('tester123');
        cy.findByRole('button', {  name: /sign in/i}).click();
    })

})