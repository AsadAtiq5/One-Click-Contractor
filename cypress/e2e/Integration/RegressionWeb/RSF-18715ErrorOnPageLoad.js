import Login from '../../../support/Login';

describe('Page load', () => {
  const login = new Login();

  it('should not throw a ui-sref error on page load', () => {
    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    cy.window().then((win) => {
      cy.stub(win.console, 'error').callsFake((msg) => {
        if (msg.includes('uiSrefDirective')) {
          throw Error('ui-sref error thrown on initial load');
        }
      });
    });
  });
});
