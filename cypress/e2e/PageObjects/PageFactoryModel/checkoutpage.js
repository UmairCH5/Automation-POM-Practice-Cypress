export class CheckoutPage {
    enterFirstName(name) {
      cy.get('#first-name').type(name).should('have.value', name)
    }
  
    enterLastName(name) {
      cy.get('#last-name').type(name).should('have.value', name)
    }
  
    enterPostalCode(code) {
      cy.get('#postal-code').type(code).should('have.value', code)
    }
  
    continue() {
      cy.get('#continue').should('be.visible').click()
    }
  
    finish() {
      cy.get('#finish').should('be.visible').click()
    }
  
    backToProducts() {
      cy.get('#back-to-products').should('be.visible').click()
    }
  }
  