import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Appointment from '../../../support/CustomerDetails/Appointment';

describe('AddAppointment', () => {
  it('Send invite to check blank email field validation', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const appointment = new Appointment();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJob();
    cy.fixture('job.json').then((job) => {
      jobInformation.customerNameInput();
      jobInformation.jobDetails(job.jname, job.jstatus, job.jassign, job.jlead, { delay: 100 });
      jobInformation.jobAddress(job.jaddress, job.jaddress2, job.jcity, job.jstate, job.jpostalcode, job.jcountry, {
        delay: 100
      });
    });
    jobInformation.saveNewJob();

    appointment.createAppointment();
    cy.fixture('appointment').then((newappointment) => {
      appointment.appointmentDetails(
        newappointment.title,
        newappointment.start_date,
        newappointment.end_date,
        newappointment.description
      );
      appointment.closeAppointmentBox();
    });
    appointment.blankEmailFieldValidation();
    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
