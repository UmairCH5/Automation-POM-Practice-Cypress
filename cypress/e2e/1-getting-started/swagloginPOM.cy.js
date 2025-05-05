import LoginPage from "../PageObjects/PageFactoryModel/LoginPage";
import { Cart } from "../PageObjects/cart";
const demo = new LoginPage();
const cart = new Cart();
describe('demosouce', ()=> {
  it('cart and login', ()=> {
    demo.Login()
    cart.AddtoCart()
  })
})