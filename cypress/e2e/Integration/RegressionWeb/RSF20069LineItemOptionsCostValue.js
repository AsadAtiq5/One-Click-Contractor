import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('Cost Value Calculation', () => {
  it(
    'Cost value should be calculated properly When generating a commission sheet for either Formula or Margin With Overhead',
    { tags: 'Regression' },
    () => {
      const login = new Login();
      const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
      const jobInformation = new Jobinformation();
      const customerestimates = new CustomerEstimates();

      login.setLoginEmailAndPasswordUsingApi();
      login.visitPage();

      jobInformation.addNewJobFromFixture();
      jobInformation.saveNewJob();

      viewCustomerMenuOptions.viewEstimates();
      customerestimates.estimateNameFromFixture();
      customerestimates.productOptionNameFromFixture();
      customerestimates.saveEstimate();
      customerestimates.closeEstimate();
      customerestimates.generatesProductCSV();
      customerestimates.costverification();
    }
  );
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
