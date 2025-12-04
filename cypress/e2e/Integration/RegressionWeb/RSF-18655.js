import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';

describe('UploadingDocument and verify checkboxes', () => {
  it('Uploading pdf file in Document', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();

    jobInformation.saveNewJob();

    document.navigateToDocument();

    document.uploadFile();
    document.missingCheckBoxesProposalandAngreement();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
