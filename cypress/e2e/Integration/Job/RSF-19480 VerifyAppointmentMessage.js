import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Appointment from '../../../support/CustomerDetails/Appointment';
import Scheduler from '../../../support/Scheduler';

describe('VerifyAppointmentMessage', () => {
  it('Verify Appointments Message On Job Appointment', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const appointment = new Appointment();
    const scheduler = new Scheduler();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    appointment.openAppointments();
    scheduler.recursiveFunction();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
