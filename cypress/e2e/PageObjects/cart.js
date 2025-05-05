export class Cart{

AddtoCart(){
    cy.get('.product_sort_container').select('Price (low to high)')
    cy.get('#add-to-cart-sauce-labs-onesie').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.scrollTo('bottom')
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.scrollTo('top')
    cy.get('.shopping_cart_link').should('be.visible').click()
    cy.get('#remove-sauce-labs-fleece-jacket').should('be.visible').click()
    cy.get('#checkout').should('be.visible').click()
    cy.get('#first-name').type('Umair')
    cy.get('#first-name').should('have.value', 'Umair')
    cy.get('#last-name').type('Anwar')
    cy.get('#last-name').should('have.value', 'Anwar')
    cy.get('#postal-code').type('2025')
    cy.get('#postal-code').should('have.value', '2025')
    cy.get('#continue').should('be.visible').click()
    cy.get('#finish').should('be.visible').click()
    cy.get('#back-to-products').should('be.visible').click()
}

}
