const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Globalne varijable!
    baseUrl: "https://gallery-app.vivifyideas.com/",
    env: {
      testUserEmail: "vivifytest@gmail.com",
      testUserPassword: "12345678"
    },
  },
});
