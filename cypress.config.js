const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      
     
    },
    chromeWebSecurity: false
  },
});
    // cypress.config.js
    module.exports = {
      e2e: {
        pageLoadTimeout: 120000, // Increase to 120 seconds
        // ... other configurations
      },
    };
   