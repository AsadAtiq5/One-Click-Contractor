import { readPdf } from '../rsf-qa/cypress/support/readPdf';
import { readfilename } from '../rsf-qa/cypress/support/readFilename';
import { convertXlsxToJson } from './cypress/support/xlsxUtils';
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = {
  grepFilterSpecs: true,
  grepOmitFiltered: true,
  adminUsername: 'saadusmani92@gmail.com',
  adminPassword: 'Asd@7867',
  estimateUsername: 'jawad@tkxel.com',
  estimatePassword: '12345678',
  restrictedAddJobUsername: 'jawad@tkxel.io',
  restrictedAddJobPassword: '12345678',
  checkBoxUsername: 'faizan@tkxel.com',
  checkBoxPassword: '123',
  assignToUserName: 'placeholder+scheduler981@remotesf.com',
  assigntoPassowrd: 'rLchZDn3',

  compilerOptions: {
    sourceType: 'module',
    types: ['node', 'cypress', 'cypress-react-selector']
  },
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    trashAssetsBeforeRuns: true,
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      noPending: true,
      saveJson: true
    },
    setupNodeEvents(on, config) {
      on('task', {
        readPdf,
        readfilename,
        convertXlsxToJson,
        removeDirectory,

      });

      require('cypress-mochawesome-reporter/plugin')(on);
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    }
  },
  retries: {
    runMode: 1
  }
};
