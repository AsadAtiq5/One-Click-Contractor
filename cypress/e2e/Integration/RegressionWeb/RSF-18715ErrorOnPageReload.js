import Login from '../../../support/Login';

describe('Page refresh', () => {
  const login = new Login();

  it('should not throw a ui-sref error on page refresh', () => {
    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    cy.reload();

    cy.window().then((win) => {
      cy.stub(win.console, 'error').callsFake((msg) => {
        if (msg.includes('uiSrefDirective')) {
          throw Error('ui-sref error thrown on refresh');
        }
      });
    });
  });
});
