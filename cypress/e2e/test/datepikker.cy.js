Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    it.only('Date and Time pikker',  () => {
        cy.visit('https://demoqa.com/forms')
        cy.contains('Practice Form').click()
        cy.get('#subjectsContainer').click().type('Eng')
        cy.get('#react-select-2-option-0').click()
        cy.get('input[type=file]').selectFile('C:/Users/Dell/Desktop/cypress-demo/cypress/fixtures/pic.png')
        cy.get('button[type=submit]').scrollIntoView()
        cy.scrollTo('top')
        cy.get('input[id=firstName]').type('Umair')
        cy.get('input[id=firstName]').clear()
        cy.get('#gender-radio-1').check({force: true})
        cy.get('input[type=checkbox]').check({force: true})
        cy.contains('Widgets').click()
        cy.contains('Menu').click()
        cy.get('#nav > li:nth-child(2) > ul').invoke('show')
        cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul').invoke('show')
        // .each(($el, index, $list) => {
        //   cy.log($el.text())
        //   if ($el.text() === 'English') {
        //     cy.wait(2000)
        //     cy.wrap($el).click()}
        // })
        
          })
        })
   