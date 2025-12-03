import { defineConfig } from 'cypress';
const sharedconfig = require('./sharedconfig');

export default defineConfig({

  env: {
    ...sharedconfig,
    org: '[data-testid="org-1615025"] > .org-access-item > .card-body',
    url: 'https://api-staging.remotesf.com/api/v1/users/sign_in',
    url1: 'https://api-staging.remotesf.com/api/v1/',
    jobId: '88718',
    estimateId: '6574',
    assign: 'sch eduFaizan TajHamza  SohaiRSF Saad Usmani',
    users: 'Faizan TajHamza  SohaiRSF Saad Usmani',
    jobno: '99090',
    productid: '14487969',
    orgid: 'org_id=2617',
    pricelistid:'6554',
  },
  compilerOptions: sharedconfig.compilerOptions,
  e2e: {
    ...sharedconfig.e2e, 
    baseUrl: 'https://app-staging.remotesf.com/' 
  },
  retries: sharedconfig.retries
});
