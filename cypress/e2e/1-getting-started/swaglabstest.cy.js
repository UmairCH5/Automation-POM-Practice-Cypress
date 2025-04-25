import { LoginPage } from "../PageObjects/PageFactoryModel/login";
import { ProductsPage } from "../PageObjects/PageFactoryModel/productspage";
import { CartPage } from "../PageObjects/PageFactoryModel/cartpage";
import { CheckoutPage } from "../PageObjects/PageFactoryModel/checkoutpage";
const login = new LoginPage()
const products = new ProductsPage()
const cart = new CartPage()
const checkout = new CheckoutPage()

describe('SwagLabs - Page Factory Model', () => {
  it('login and complete purchase', () => {
    login.visit()
    login.enterUsername('standard_user')
    login.enterPassword('secret_sauce')
    login.clickLogin()

    products.sortBy('Price (low to high)')
    products.addToCart('sauce-labs-onesie')
    products.addToCart('sauce-labs-bike-light')
    products.scrollToBottom()
    products.addToCart('sauce-labs-fleece-jacket')
    products.scrollToTop()
    products.goToCart()

    cart.removeItem('sauce-labs-fleece-jacket')
    cart.clickCheckout()

    checkout.enterFirstName('Umair')
    checkout.enterLastName('Anwar')
    checkout.enterPostalCode('2025')
    checkout.continue()
    checkout.finish()
    checkout.backToProducts()
  })
})
