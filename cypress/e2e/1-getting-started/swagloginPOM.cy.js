import cart from "../PageObjects/cart"
import LoginPage from "../PageObjects/LoginPage"
const Cart = new cart()
const loginPage = new LoginPage()

describe('SauceDemo', () => {
  it('login', () => {

    loginPage.visit()
    loginPage.Login()
  })
  it.only('cart functionality', ()=>{
    loginPage.visit()
    loginPage.Login()

    
    Cart.AddtoCart()
    
    
  })
})
