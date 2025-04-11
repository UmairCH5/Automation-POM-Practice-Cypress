Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    it('slider', () => {
        cy.visit('https://demoqa.com/slider')
        const valueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value',
        ).set
        cy.get('#sliderContainer input[type=range]')
        .should('have.value', 25)
        .then(($slider) => {
        valueSetter.call($slider[0], 84)
        })
        .trigger('change')
        cy.get('#sliderContainer input[type=range]').should('have.value', 84)

        

    })
})