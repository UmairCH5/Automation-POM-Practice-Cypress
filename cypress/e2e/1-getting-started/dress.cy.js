describe('to practice', () => {
    it('verify the cart functionality', () => {
        cy.visit('https://automationexercise.com/')
        cy.contains('Products').click()
        cy.get('#search_product').type('dress')
        cy.get('#submit_search').click()
        cy.get('.features_items').should('contain', 'Dress')
        cy.get('.product-overlay').first().invoke('show');
        cy.get('.product-overlay').first().contains('Add to cart').click({force: true})
        cy.contains('View Cart').click()
        cy.get('.cart_description').should('contain', 'Dress')
        cy.get('.cart_delete').click()
        cy.get('.cart_quantity_delete_price').should('not.exist')
        
        
    })
})