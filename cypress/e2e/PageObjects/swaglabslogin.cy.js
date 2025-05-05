describe('sawaglabs', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        
        
    }) 
    it.only('login page 1 ', ()=> {
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Username"]').clear().type('standard_user')
        cy.get('[name="user-name"]').clear().type('standard_user') 
        cy.get('input[type="text"]').clear().type('standard_user')
        cy.get('[data-test="username"]').clear().type('standard_user')
        cy.get('[class="input_error form_input"]').eq(0).clear().type('standard_user')
        cy.get('[placeholder="Username"][name="user-name"] ').clear().type('standard_user')
        
       


    })
    it('login page 2', ()=> {
     
       
    })
})
