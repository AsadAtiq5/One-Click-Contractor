import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('JobExists', () => {
  it('Verify New Job Exits', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.jobsExistVerify();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
