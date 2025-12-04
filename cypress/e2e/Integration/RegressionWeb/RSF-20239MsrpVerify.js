import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';
import ApiFunctions from '../../../support/ApiFunctions';

describe('MSRPVerify', () => {
  it('Verify MSRP Of Line Item Options', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();
    const apifunctions = new ApiFunctions();

    apifunctions.updateandActivateProductMsrp(30);

    login.visitPage();

    jobInformation.addquickJob();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();
    customerestimates.estimateNameFromFixture();
    customerestimates.addProductEstimateLineItem();
    customerestimates.saveEstimate();
    customerestimates.newEstimateAssertion();
    customerestimates.msrpVerify(30);
    cy.deleteDownloadsFolder();
    customerestimates.addNewLineItem();
    apifunctions.updateandActivateProductMsrp(60);
    customerestimates.msrpVerify(30);
    customerestimates.msrpTotallVerify();
  });

  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
