export class CartPage {
    removeItem(productId) {
      cy.get(`#remove-${productId}`).should('be.visible').click();
    }
  
    clickCheckout() {
      cy.get('#checkout').should('be.visible').click();
    }
  }
  