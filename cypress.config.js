const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
// const cypressOnFix = require('cypress-on-fix');
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  projectId: '399xst',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Curso Cypress - usando Cucumber',
      reportPageTitle: 'Projeto Curso Cypress - usando Cucumber',
    },

    baseUrl:'http://automationpratice.com.br/',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // on = cypressOnFix(on);

      require('cypress-mochawesome-reporter/plugin')(on);

      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;

    },
  },
});
