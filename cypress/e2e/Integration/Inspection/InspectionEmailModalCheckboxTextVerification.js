import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import Inspection from '../../../support/CustomerDetails/Inspection';

describe('Inspection Section', () => {
  it('Inspection Email modal checkbox text verification', { tags: 'Smoke' }, () => {
    const login = new Login();
    const jobInformation = new Jobinformation();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const inspection = new Inspection();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewInspection();

    inspection.checkAddAllToAgreement();
    inspection.checkAddAllToPresentation();
    inspection.saveChanges();
    inspection.clickOnEmailInspection();
    inspection.validateModalCheckText();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
