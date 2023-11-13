const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:15000,
    browser:"Chrome",
    chromeWebSecurity: false
  },
});

