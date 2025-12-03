import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Measurement from '../../../support/CustomerDetails/Measurement';

describe('Measurements Testing', () => {
  it('Export Fence Drawing button should be disabled while editing', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const measurement = new Measurement();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();

    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();

    measurement.visitmMeasurement();
    measurement.clickOnTools();
    measurement.clickOnFencingTool();
    measurement.exportFenceDrawingButtonDisabled();
    measurement.clickDraw();
    measurement.drawFence();
    measurement.exportFenceDrawingButtonDisabled();
    measurement.finishDraw();
    measurement.exportFenceDrawingButtonDisabled();
    measurement.clickSave();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
