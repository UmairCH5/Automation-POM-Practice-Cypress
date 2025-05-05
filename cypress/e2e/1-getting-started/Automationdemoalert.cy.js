Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  })
  
describe('automation demo ' , ()=> {
    it('Alerts ', ()=> {
        cy.visit('https://demo.automationtesting.in/Alerts.html')
        cy.get('.analystic').first().click()
        cy.get('[onclick="alertbox()"]').click()
        .should('be.visible', 'I am an alert box!')
        cy.get('.analystic').eq(1).click()
        cy.get('[onclick="confirmbox()"]').click()
        .should('be.visible', 'Press a Button !')
        cy.get('.analystic').eq(2).click()
        cy.get('[onclick="promptbox()"]').click()
        

        
    })
    
    
})