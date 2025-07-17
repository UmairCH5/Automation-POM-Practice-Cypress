describe('magento cart', () =>{
    it('cart function', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('.oxd-text--h5').should('have.text', 'Login')
        
    })
})