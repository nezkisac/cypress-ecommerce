const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/commands.js',
    baseUrl: 'https://beta-ilo-frontend.office-power.net'
  },
  fixturesFolder: 'cypress/fixtures'
});

