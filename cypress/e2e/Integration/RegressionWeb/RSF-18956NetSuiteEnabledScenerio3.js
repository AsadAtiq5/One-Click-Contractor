import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('Without manual_trigger enabled for NetSuite', () => {
  it('User with estimate.manual_trigger will NOT see the option', { tags: 'Resgression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();

    login.setLoginEmailAndPasswordUsingApi('scenerio3@gmail.com', '12345');
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    viewCustomerMenuOptions.viewEstimates();
    customerestimates.estimateNameFromFixture();
    customerestimates.productNameFromFixture();
    customerestimates.saveEstimate();

    customerestimates.newEstimateAssertion();

    customerestimates.openDropdown();
    customerestimates.manuallyTriggerNotVisible();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
