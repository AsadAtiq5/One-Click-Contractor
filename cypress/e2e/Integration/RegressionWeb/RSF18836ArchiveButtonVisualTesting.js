import Login from '../../../support/Login';
import CustomerFilter from '../../../support/CustomerFilter';

describe('Archive Icon Visual', () => {
  it('Archive Icon Visual Testing', { tags: 'Visual' }, () => {
    const login = new Login();
    const customerFilter = new CustomerFilter();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('archiveusername'), Cypress.env('adminPassword'));
    customerFilter.filterButton();
    customerFilter.addArchivedJobs();
    customerFilter.applyFilterButton();
    customerFilter.archiveIcon();
    cy.task('generateReport');

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
after(() => {
  cy.task('generateReport');
});
