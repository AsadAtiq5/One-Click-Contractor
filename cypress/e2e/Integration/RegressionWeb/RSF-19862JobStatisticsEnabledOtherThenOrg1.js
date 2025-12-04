import Login from '../../../support/Login';
import NavigationMenu from '../../../support/NavigationMenu';

describe('User with the Job.Statistics Enabled and Other then org 1', () => {
  it(
    'Dashboard graph should be Visible for the users with the Job.Statistics Enabled and Other then org 1(RSF)',
    { tags: 'Visual' },
    () => {
      const login = new Login();
      const navigationmenu = new NavigationMenu();

      login.visitPage();
      login.setLoginEmailAndPassword('job+statisticsSC2@mailinator.com', 'Test');
      login.visitPage();
      navigationmenu.graphVerification(navigationmenu.graph);
    }
  );
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
