Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  })
describe('image', ()=> {
    it('image upload',()=> {
        cy.visit('https://demoqa.com/automation-practice-form')
      cy.get('#uploadPicture').selectFile('cypress/fixtures/pic.png')
     
   
            
            
    })
})