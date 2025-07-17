describe('Amazon', () => {
    it('Television Assignment - Add Product to Cart', () => {
      cy.visit('https://www.amazon.in');
  
      // Step 1: Click hamburger menu
      cy.get('#nav-hamburger-menu').click();
  
      // Step 2: Scroll and click "TV, Appliances, Electronics"
      cy.get('#hmenu-content > .hmenu-visible').scrollTo('center');
      cy.contains('a.hmenu-item', 'TV, Appliances, Electronics', { timeout: 4000 }).click();
  
      // Step 3: Click "Television"
      cy.get('.hmenu-visible').contains('Television').click();
  
      // Step 4: Scroll slightly and click Samsung brand filter
      cy.scrollTo(0, 300);
      cy.contains('span.a-size-base', 'Samsung')
      .parent() // Go to the label or wrapper element
      .find('input[type="checkbox"]')
      .check({ force: true });
    
      // Step 5: Wait and sort by "Price: High to Low"
      cy.wait(2000);
      cy.get('.a-dropdown-prompt').click();
      cy.contains('a', 'Price: High to Low').click();
  
      // Step 6: Wait for results to load
      cy.wait(3000);
  
      // Step 7: Find and click second highest-priced Samsung TV
      cy.get('.s-main-slot .s-result-item')
        .find('.a-price-whole')
        .then(($prices) => {
          const priceArray = [...$prices].map(priceEl => {
            return parseInt(priceEl.innerText.replace(/[^\d]/g, ''), 10);
          });
  
          const sortedPrices = [...priceArray].sort((a, b) => b - a);
          const secondHighest = sortedPrices[1];
  
          cy.get('.s-main-slot .s-result-item').each(($el) => {
            const priceText = $el.find('.a-price-whole').text().replace(/[^\d]/g, '');
            if (parseInt(priceText, 10) === secondHighest) {
              const link = $el.find('a.a-link-normal').attr('href');
              if (link) {
                cy.visit('https://www.amazon.in' + link);
              }
              return false; // break loop
            }
          });
        });
  
      // Step 8: Assert and log "About this item"
      cy.get('#feature-bullets')
        .should('contain.text', 'About this item')
        .then(($section) => {
          const aboutText = $section.text();
          cy.log('About this item:');
          console.log('About this item:\n', aboutText);
        });
    });
  });
  