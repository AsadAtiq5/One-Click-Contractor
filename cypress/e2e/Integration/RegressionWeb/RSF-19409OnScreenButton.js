import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Signature from '../../../support/CustomerDetails/Signature';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('RSF-19409 Creating Signature', () => {
  it('Verify No Error On onScreen Button', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();
    const customerestimates = new CustomerEstimates();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();

    customerestimates.estimateNameFromFixture();
    customerestimates.productNameFromFixture();
    customerestimates.saveEstimate();
    customerestimates.newEstimateAssertion();

    signature.visitSignaturePage();
    signature.createSignature();
    signature.onScreenButton();
    signature.onScreenButtonVerification();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
