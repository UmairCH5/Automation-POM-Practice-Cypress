export class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    enterUsername(username) {
      cy.get('#user-name').type(username).should('have.value', username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password).should('have.value', password);
    }
  
    clickLogin() {
      cy.get('#login-button').should('be.visible').click();
    }
  }
  