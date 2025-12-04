import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';
import Proposal from '../../../support/CustomerDetails/Proposal';
import Document from '../../../support/CustomerDetails/Document';

describe('ContractResourcePdfVerify', () => {
  it('Verifying the PDF in contract included from Resources', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();
    const proposal = new Proposal();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();

    customerestimates.estimateNameFromFixture();
    customerestimates.productNameFromFixture();
    customerestimates.saveEstimate();
    customerestimates.newEstimateAssertion();

    viewCustomerMenuOptions.viewAgreements();
    viewCustomerMenuOptions.viewDocuments();
    document.resource();
    proposal.contractDocumentCheckbox();
    viewCustomerMenuOptions.viewAgreements();
    proposal.VerifyContractDocument();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
