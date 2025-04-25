export class ProductsPage {
    sortBy(option) {
      cy.get('.product_sort_container').select(option);
    }
  
    addToCart(productId) {
      cy.get(`#add-to-cart-${productId}`).click();
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').should('be.visible').click();
    }
  
    scrollToTop() {
      cy.scrollTo('top');
    }
  
    scrollToBottom() {
      cy.scrollTo('bottom');
    }
  }
  