Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    it('Tool Tips', () => {
        cy.visit('https://demoqa.com/tool-tips')
        cy.get('#toolTipButton').click()
       cy.get('#toolTipTextField').click()
    })
})