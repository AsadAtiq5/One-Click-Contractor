import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
//import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import Signature from '../../../support/CustomerDetails/Signature';
//import Signature from '../../../support/CustomerDetails/Signature';

describe('Settiing up message', () => {
  it('Setting up message for signing request', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();
    //const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const signature = new Signature();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();

    jobInformation.saveNewJob();

    document.navigateToDocument();

    document.uploadFile();
    document.uploadFileAssert();
    //viewCustomerMenuOptions.viewSignature();
    signature.viewSignature();
  });
});
