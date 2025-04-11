Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    it('Fill the form', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Umair')
        cy.get('#lastName').type('Anwar')
        cy.get('#userEmail').type('umairch.qa@gmail.com')
        cy.get('.custom-control-label').eq(0).click()
     
    })
  })
