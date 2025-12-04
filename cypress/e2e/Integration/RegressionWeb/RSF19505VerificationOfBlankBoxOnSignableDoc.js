import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import Signature from '../../../support/CustomerDetails/Signature';

describe('VerificationOfBlankBoxOnSignableDoc', () => {
  it('Verification of Signable Doc BlankScreen With No Signers', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();
    document.uploadFileWithoutSignatures();

    signature.visitSignaturePage();
    signature.signableDocButton();
    signature.selectDocument();
    signature.blankBoxVerify();
  });

  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
});
