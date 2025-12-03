import Login from '../../../support/Login';

describe('One click Contractor Icons', () => {
  it('One click Contractor Fav Icon verification On Jobs page', { tags: 'Visual' }, () => {
    const login = new Login();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('archiveusername'), Cypress.env('adminPassword'));
    login.favIconVerification();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
