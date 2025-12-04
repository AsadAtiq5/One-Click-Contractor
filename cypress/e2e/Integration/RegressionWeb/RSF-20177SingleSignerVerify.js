import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import Signature from '../../../support/CustomerDetails/Signature';

describe('SingleSignerVerify', () => {
  it('Only One Signer Should Be Available', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addquickJob();
    jobInformation.saveNewJob();

    document.navigateToDocument();
    document.uploadFile();
    document.uploadFileAssert();

    signature.visitSignaturePage();
    signature.signableDocButton();
    signature.selectDocument();
    signature.createDocument();
    signature.singleSignerVerify();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
