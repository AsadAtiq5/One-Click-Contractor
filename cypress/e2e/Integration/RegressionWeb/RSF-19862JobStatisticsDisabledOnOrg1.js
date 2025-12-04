import Login from '../../../support/Login';
import NavigationMenu from '../../../support/NavigationMenu';

describe('User with the Job.Statistics Disabled and On org 1', () => {
  it(
    'Dashboard graph should be empty for the users with the Job.Statistics Disabled and On org 1(RSF)',
    { tags: 'Regression' },
    () => {
      const login = new Login();
      const navigationmenu = new NavigationMenu();

      login.visitPage();
      login.setLoginEmailAndPasswordUsingApi('job+statisticsSC3@mailinator.com', 'Test');
      login.visitPage();
      navigationmenu.totalCustomerStatistics();
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
