class Locators {
    registerButton= '#loginPanel > :nth-child(3) > a'
    registerFirstName= "input[id='customer.firstName']"
    registerLastName= "input[id='customer.lastName']"
    regiterAddressStreet= "input[id='customer.address.street']"
    registerAddressCity= "input[id='customer.address.city']"
    registerAddressState= "input[id='customer.address.state']"
    registerAddressZipcode= "input[id='customer.address.zipCode']"
    registerPhoneNumber= "input[id='customer.phoneNumber']"
    registerSSN= "input[id='customer.ssn']"
    registerUserName= "input[id='customer.username']"
    registerPassword= "input[id='customer.password']"
    registerrepeetedPassword= "input[id='repeatedPassword']"
    registerSubmit= '[type="submit"]'
    registerError= "span[id='customer.username.errors']"
    loginUsername= "input[name='username']"
    loginPassword= "input[name='password']"
    userAccountActivity= '#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a'
    activityPeriod= '#month'
    activityType= '#transactionType'
    activityGo= '#activityForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input'

}
export default Locators