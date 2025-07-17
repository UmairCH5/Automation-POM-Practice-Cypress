Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  })
  
describe('automation demo ' , ()=> {
    it('Register form', ()=> {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('[placeholder="First Name"]').type('Umair')
        cy.get('[placeholder="Last Name"]').type('Anwar')
        cy.get('[ng-model="Adress"]').type('Mustfah town,Lahore')
        cy.get('[ng-model="EmailAdress"]').type('umair.qa@gmail.com')
        cy.get('[ng-model="Phone"]').type('+911234567898')
        cy.get('[type="radio"]').first().check()
        cy.get('[type="checkbox"]').first().check()
        cy.get('[type="checkbox"]').eq(2).check()
        cy.get('#msdd').click()
        cy.get('[ng-model="Skill"]').select('PHP')
        cy.get('#select2-country-container').click({force:true})
        cy.get('#select2-country-results > :nth-child(4)').click()
        cy.get('[id="yearbox"]').select('2015')
        cy.get('[placeholder="Month"]').select('June')
        cy.get('[placeholder="Day"]').select('10')
        cy.get('#firstpassword').type('Umairch@')
        cy.get('#secondpassword').type('Umairch@')
        cy.get('[type="submit"]').click()

        

        
        
        


    })
})