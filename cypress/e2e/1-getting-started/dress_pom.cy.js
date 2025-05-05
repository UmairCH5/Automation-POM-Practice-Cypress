import { Cart_dress } from "../PageObjects/dress-cart";
const cart= new Cart_dress
describe('cart pom', () =>{
    it('cart', ()=> {
        cart.searchdress()
       cart.addtocart()
    })
})