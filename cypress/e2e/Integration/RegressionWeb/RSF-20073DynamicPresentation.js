import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import Presentation from '../../../support/CustomerDetails/Presentation';

describe('Dynamic and Existing Presentations', () => {
  it('Consistently Name "Dynamic" Presentations instead of "Custom" or "Customer"', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new JobInformation();
    const presentation = new Presentation();

    login.setLoginEmailAndPasswordUsingApi('adnan1@mailinator.com', '1');
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewPresentations();

    presentation.dynamicSectionVerification();
    presentation.clickExisting();
    presentation.existingSectionVerification();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
