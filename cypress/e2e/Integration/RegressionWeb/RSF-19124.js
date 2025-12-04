import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';
import Signature from '../../../support/CustomerDetails/Signature';

describe('Job api service update including "includes" correctly', () => {
  it(
    'Job api service update including "includes" correctly success message verification',
    { tags: 'CustomerJob' },
    () => {
      const login = new Login();
      const jobInformation = new JobInformation();
      const document = new Document();
      const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
      const customerestimates = new CustomerEstimates();
      const signature = new Signature();

      login.setLoginEmailAndPasswordUsingApi();
      login.visitPage();

      jobInformation.addNewJobFromFixture();
      jobInformation.saveNewJob();

      document.navigateToDocument();
      document.uploadFile();
      document.uploadFileAssert();
      document.proposalCheck();
      document.agreementCheck();

      viewCustomerMenuOptions.viewEstimates();
      customerestimates.estimateNameFromFixture();
      customerestimates.productNameFromFixture();
      customerestimates.saveEstimate();

      viewCustomerMenuOptions.viewProposals();
      viewCustomerMenuOptions.viewAgreements();

      signature.clickSignature();
      signature.validateAlertMessage();
      signature.Cancelsigningrecipientsmodal();

      document.navigateToDocument();
      document.proposalCheck();
      document.agreementCheck();
      document.resource();
      document.proposalCheck();
      document.agreementCheck();

      viewCustomerMenuOptions.viewProposals();
      viewCustomerMenuOptions.viewAgreements();
      signature.clickSignature();
      signature.validateAlertMessage();
    }
  );
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
