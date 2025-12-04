import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('With manual_trigger enabled for NetSuite', () => {
  it('User with estimate.manual_trigger WILL see the option', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();

    login.setLoginEmailAndPasswordUsingApi('scenerio1@gmail.com', '12345');
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();
    customerestimates.estimateNameFromFixture();
    customerestimates.productNameFromFixture();
    customerestimates.saveEstimate();

    customerestimates.newEstimateAssertion();

    customerestimates.openDropdown();
    customerestimates.manuallyTriggerVisible();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
