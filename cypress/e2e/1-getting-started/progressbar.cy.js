Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    beforeEach(() =>{
        cy.visit('https://demoqa.com/')
    })
    it('ProgressBar', () => {
        
        cy.contains('Widgets').click()
        cy.contains('Progress Bar').click()
        
        cy.get('#startStopButton').click()
        //cy.wait(2000)
        cy.get('[role="progressbar"]',{timeout:20000}).should('contain', '50%')
        cy.get('#startStopButton').click()
        cy.get('#startStopButton').should('be.visible') .click()
        cy.get('[role="progressbar"]',{timeout:20000}).should('contain', '100%')
        cy.get('#resetButton').should('be.visible').click()
        cy.wait(5000)
        cy.get('#startStopButton').click()
        

        // cy.wait(5000)
        // cy.get('#startStopButton').click()
        // cy.get('#startStopButton').click()
        // cy.wait(7000)
        // cy.get('#resetButton').click()
    })
})