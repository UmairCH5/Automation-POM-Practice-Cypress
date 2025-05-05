export class Magento{
    searchproduct(){
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('#ui-id-4 > span:nth-child(2)').first().trigger('mouseover')
        cy.get('#ui-id-9').trigger('mouseover')
        cy.get('#ui-id-11').click()
        cy.get('.product-item-info').first().click()
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button > span').click()
        cy.wait(5000)
        cy.get('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a').click()
       cy.get('.block-content').should('contain', 'Jacket') 
    }
    addtocart(){
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(5000)
        cy.get('#customer-email').type('umair@gmail.com')
        .should('have.value', 'umair@gmail.com')
        cy.wait(5000)
        cy.get('[name="firstname"]').type('Umair')
        .should('have.value', 'Umair')
        cy.get('[name="lastname"]').type('Anwar')
        .should('have.value', 'Anwar')
        cy.get('[name="company"]').type('devsorb')
        .should('have.value', 'devsorb')
        cy.get('[name="street[0]"]').type('street-no-4')
        .should('have.value', 'street-no-4')
        cy.get('[name="city"]').type('Lahore')
        .should('have.value', 'Lahore')
        cy.get('#shipping-new-address-form select[name=region_id]').select('Alaska');
        cy.get('[name="postcode"]').type('12345')
        .should('have.value', '12345')
        cy.get('#shipping-new-address-form select[name=country_id]').select('Syria')
      .and('contain', 'Syria')
        
        cy.get('[name="telephone"]').type('12345678')
        .should('have.value', '12345678')
        cy.get('#checkout-shipping-method-load > table > tbody > tr > td:nth-child(1) > input').click({multiple:true})
        cy.get('#shipping-method-buttons-container > div > button').click()
        cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').click()
    }
}