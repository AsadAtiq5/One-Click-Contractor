import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('Manually Trigger modal fields validations for alpha numeric values', () => {
  it('Override amount and Other credit Fields validations for alpha numeric values', () => {
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
    customerestimates.clickOnManualTrigger();
    customerestimates.manuallyTriggerFieldsValidation(customerestimates.decimalvalue1, customerestimates.decimalvalue2);
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
