const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rfeq28',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: "https://opensource-demo.orangehrmlive.com/",
  viewportHeight:600,
  viewportWidth: 650,
  experimentalStudio:true  
  },
});


require('@applitools/eyes-cypress')(module);
