import { Magento } from "../PageObjects/magento";
const id = new Magento
describe('magento', () => {
    it('check add to cart', () => {

        id.searchproduct()
        id.addtocart()
    })
})