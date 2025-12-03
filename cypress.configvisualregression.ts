import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    adminPassword: 'Asd@7867',
    archiveusername: 'placeholder+archivebutton311@remotesf.com',
  },

  compilerOptions: {
    sourceType: 'module',
    types: ['node', 'cypress', 'cypress-react-selector'],
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
      getCompareSnapshotsPlugin(on, config);
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://app-qa.remotesf.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      noPending: true,
      saveJson: true,
    },
  },
});
