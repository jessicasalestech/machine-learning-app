const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    waitForAnimations: true,
    defaultCommandTimeout: 10000,  // Aumente o tempo limite se necessário
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.spec.js',
    supportFile: 'cypress/support/e2e.js'
  }
})
