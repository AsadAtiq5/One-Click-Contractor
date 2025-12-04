import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Measurement from '../../../support/CustomerDetails/Measurement';

describe('VerifyImportedFile', () => {
  it('Verify Imported WIndows Values', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const measurement = new Measurement();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    jobInformation.addquickJob();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();
    measurement.visitmMeasurement();
    measurement.importFile();
    measurement.verifyWindowsValue();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
