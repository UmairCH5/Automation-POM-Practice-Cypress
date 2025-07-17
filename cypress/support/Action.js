import Locators from "./Locators";
import urls from "./urls";
import testData from "./testdata";
class Action {
  constructor() {
    this.locators = new Locators()
  }
  registerPage() {
    cy.visit(urls.loginPage)
    cy.get(this.locators.registerButton).click()
    cy.get(this.locators.registerFirstName).type(testData.validUser.firstName)
    cy.get(this.locators.registerLastName).type(testData.validUser.lastName)
    cy.get(this.locators.regiterAddressStreet).type(testData.validUser.addressStreet)
    cy.get(this.locators.registerAddressCity).type(testData.validUser.addressCity)
    cy.get(this.locators.registerAddressState).type(testData.validUser.addressState)
    cy.get(this.locators.registerAddressZipcode).type(testData.validUser.addressZipcode)
    cy.get(this.locators.registerPhoneNumber).type(testData.validUser.phoneNumber);
    cy.get(this.locators.registerSSN).type(testData.validUser.ssn);
    cy.get(this.locators.registerUserName).type(testData.validUser.username);
    cy.get(this.locators.registerPassword).type(testData.validUser.password);
    cy.get(this.locators.registerrepeetedPassword).type(testData.validUser.password);
    cy.get(this.locators.registerSubmit).last().click();
    cy.get(this.locators.registerError).contains(
      "This username already exists."
    );
  }
  Login() {
    cy.get(this.locators.loginUsername).type(testData.validUser.username);
    cy.get(this.locators.loginPassword).type(testData.validUser.password);
    cy.get(this.locators.registerSubmit).first().click();
    cy.get(this.locators.userAccountActivity).click();
    cy.get(this.locators.activityPeriod).select(testData.validUser.period);
    cy.get(this.locators.activityType).select(testData.validUser.type);
    cy.get(this.locators.activityGo).click();
  }
}
export default Action;
