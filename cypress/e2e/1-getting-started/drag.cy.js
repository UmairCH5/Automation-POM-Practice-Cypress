// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from failing the test
//     return false;
//   })
  
// describe('Demoqa', () => { 
//     beforeEach(() =>{ 
//         cy.visit('https://demoqa.com')
//     })
//     it('simple drag', () => {
//         require('@4tw/cypress-drag-drop')
        
//         cy.contains('Interaction').click()
//         cy.contains('Droppable').click()
//         cy.get('#draggable').should('be.visible')
//         cy.get('#droppable').should('be.visible')
//         cy.get('#draggable').drag('#droppable',{force:true})
//     })
//     it('Accept and notacceptable', () =>{
//         cy.contains('Interaction').click()
//         cy.contains('Droppable').click()
//         cy.get('#droppableExample-tab-accept').click()
//         cy.get('#acceptable').should('be.visible')
//         cy.get('#notAcceptable').should('be.visible')
//         //cy.get('#droppable').should('be.visible')
//         cy.get('#acceptable').drag('#droppable', {force:true})
//         cy.get('#notAcceptable').drag('#droppable', {force:true})
//     })
//     it('Prevent Propogation', () => {
//         cy.contains('Interaction').click()
//         cy.contains('Droppable').click()
//         cy.get('#droppableExample-tab-preventPropogation').click()
//         cy.get('#dragBox').should('be.visible')
//         cy.get('#notGreedyInnerDropBox').should('be.visible')
//         cy.get('#notGreedyDropBox').should('be.visible')
//         cy.get('#dragBox').drag('#notGreedyInnerDropBox', {force:true})
//         cy.get('#dragBox').drag('#notGreedyDropBox', {force:true})

//     })
// })
