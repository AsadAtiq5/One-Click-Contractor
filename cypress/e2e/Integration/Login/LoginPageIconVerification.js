import Login from '../../../support/Login';

describe('One click Contractor Icons', () => {
  it('One click Contractor Icon verification On Login page', { tags: 'Visual' }, () => {
    const login = new Login();

    login.visitPage();
    login.iconsVerification(login.loginPageIcon, login.loginPageIconName);

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
