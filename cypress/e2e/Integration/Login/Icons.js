import Login from '../../../support/Login';

describe('One click Contractor Icons', () => {
  it('One click Contractor Icons verification', { tags: 'Visual' }, () => {
    const login = new Login();

    login.visitPage();
    login.iconsVerification(login.loginPageIcon, login.loginPageIconName);
    login.setLoginEmailAndPassword(Cypress.env('archiveusername'), Cypress.env('adminPassword'));
    login.iconsVerification(login.jobsPageIcon, login.jobsPageIconName);
    login.favIconVerification();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
  // after(() => {
  //   const login = new Login();
  //   cy.viewport(1920,900)
  //   login.iconsVerification("link[rel='icon']",'favicon')
  // });
});
