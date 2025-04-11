Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('Demoqa', () => { 
    it('Date and Time pikker', () => {
        cy.visit('https://demoqa.com/date-picker')
        cy.get('#datePickerMonthYearInput').click()
        cy.get('.react-datepicker__month-select').select('April')
        cy.get('.react-datepicker__year-select').select('2025')
        cy.get('.react-datepicker__day--021').click()
        cy.get('#dateAndTimePickerInput').click()
        cy.get('.react-datepicker__month-read-view').click()
        cy.get('.react-datepicker__month-option').contains('April').click()
        cy.get('.react-datepicker__year-read-view').click()
        cy.get('.react-datepicker__year-option').contains('2025').click()
        cy.get('.react-datepicker__day--030')  
        .not('.react-datepicker__day--outside-month').click()
        cy.get('.react-datepicker__time-list-item').contains('07:00').click()
            })
          })
   