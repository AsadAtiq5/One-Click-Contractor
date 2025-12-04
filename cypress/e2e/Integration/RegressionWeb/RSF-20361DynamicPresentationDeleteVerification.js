import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';
import AdministrationNavigation from '../../../support/AdministrationNavigation';
import AdministrationPresentation from '../../../support/AdministrationPresentation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import Presentation from '../../../support/CustomerDetails/Presentation';

describe('Dynamic Presentations Folder Delete', () => {
  it('Dynamic Presentations - Deleted Presentations should not display In job', { tags: 'Regression' }, () => {
    const login = new Login();
    const navigationMenu = new NavigationMenu();
    const administrationNavigation = new AdministrationNavigation();
    const administrationPresentation = new AdministrationPresentation();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const presentation = new Presentation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    navigationMenu.viewAdministrationMenu();

    administrationNavigation.selectAdministration();
    administrationNavigation.viewPresentation();

    administrationPresentation.addPresentationFromFixture();
    administrationPresentation.addNewFolder();
    cy.fixture('folderName').then((newfolder) => {
      administrationPresentation.writeNames(newfolder.pfoldername);
    });
    administrationPresentation.saveFolder();
    administrationPresentation.openAddedFolder();
    administrationPresentation.addPresentationFromFixture();

    administrationNavigation.viewJobs();

    administrationPresentation.openJob();

    viewCustomerMenuOptions.viewPresentations();

    presentation.clickExisting();
    presentation.continueConfirmation();
    presentation.existingSectionVerification();
    presentation.presentationVerification();
    presentation.openFolder();
    presentation.presentationVerification();

    login.visitPage();

    navigationMenu.viewAdministrationMenu();

    administrationNavigation.selectAdministration();
    administrationNavigation.viewPresentation();
    administrationPresentation.deleteFolder();

    presentation.continueConfirmation();

    administrationNavigation.viewJobs();

    administrationPresentation.openJob();

    viewCustomerMenuOptions.viewPresentations();

    presentation.clickExisting();
    presentation.continueConfirmation();
    presentation.existingSectionVerification();
    presentation.deletedFolderVerification();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
