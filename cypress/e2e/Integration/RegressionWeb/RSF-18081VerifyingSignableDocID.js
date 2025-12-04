import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import Signature from '../../../support/CustomerDetails/Signature';

describe('VerifyingSignableDocID', () => {
  it('Verifying The Document ID From Validate and signeddocuments Api', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();
    document.uploadFile();
    document.uploadFileAssert();

    signature.visitSignaturePage();
    signature.signableDocButton();
    signature.selectDocument();
    signature.validateApi();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
