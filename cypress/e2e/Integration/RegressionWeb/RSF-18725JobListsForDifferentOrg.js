import Login from '../../../support/Login';

describe('Job List verification', () => {
  it('Jobs list are shown on login and logout with different org users', { tags: 'Regression' }, () => {
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    login.logout();
    login.setLoginEmailAndPassword(Cypress.env('restrictedAddJobUsername'), Cypress.env('restrictedAddJobPassword'));
    login.jobsExistsAssertion();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
