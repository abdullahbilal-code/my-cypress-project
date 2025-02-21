const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rfeq28',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: "https://tree.taiga.io/login",
  setupNodeEvents(on, config) {

    require('@applitools/eyes-cypress')(on, config);
    return config;
},
  viewportHeight:600,
  viewportWidth: 950,
  experimentalStudio:true  
  },
});

require('@applitools/eyes-cypress')(module);

