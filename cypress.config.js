const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers/',
    setupNodeEvents(on, config) {
    },
  },
});
