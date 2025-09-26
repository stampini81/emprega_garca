const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.emprega.garca.sp.gov.br/',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});
