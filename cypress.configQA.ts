import { defineConfig } from 'cypress';
const sharedconfig = require('./sharedconfig');

export default defineConfig({
  env: {
    ...sharedconfig,
    org: '[data-testid="org-10"] > .org-access-item > .card-body > .h-100',
    url: 'https://api-qa.remotesf.com/api/v1/users/sign_in',
    url1: 'https://api-qa.remotesf.com/api/v1/',
    jobId: '101950',
    estimateId: '8729',
    assign: 'sch eduFaizan\t TajHamza SohaiRSF Saad Usmani',
    users: 'Faizan\t TajHamza SohaiRSF Saad Usmani',
    jobno: '114867',
    productid: '303632',
    orgid: 'org_id=1995',
    pricelistid:'1872',
  },
  compilerOptions: sharedconfig.compilerOptions,
  e2e: {
    ...sharedconfig.e2e,
    baseUrl: 'https://app-qa.remotesf.com/' 
  },
  retries: sharedconfig.retries
});
