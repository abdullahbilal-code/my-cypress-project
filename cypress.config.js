const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rfeq28',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: "https://www.linkedin.com/",
  viewportHeight:600,
  viewportWidth: 650
  },
});
