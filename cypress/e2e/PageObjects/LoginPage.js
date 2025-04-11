
class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/')
    }
  
    Login(username) {
      cy.get('[data-test="username"]').type('standard_user')
   
      cy.get('[data-test="password"]').type('secret_sauce')
    
      cy.get('[data-test="login-button"]').click()
  
        cy.url().should('include', '/inventory.html');

    }
      


}
    
  
  
  export default LoginPage
  