/// <reference types = "Cypress" />

class Signature {
  constructor() {
    this.modal = 'modal-content';
    this.spinnerGraphic = '.spinner-graphic';
    this.spinnerOverlay = '#spinner > img';
    this.signature = 'Signatures';
    this.signatureTab = '#signatures-page-tabs-tab-estimate_documents';
    this.signableDoc = '#signatures-page-tabs-tab-signable_documents';
    this.createAgreementButton =
      '.ng-isolate-scope > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)';
    this.createSignableDocButton =
      '.ng-isolate-scope > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)';
    this.resourcesButton =
      'body > div.modal > div > div > div > div.modal-body > div > div > div:nth-child(1) > div > div > button.btn.btn-light';
    this.jobDocButton =
      'body > div.modal > div > div > div > div.modal-body > div > div > div:nth-child(1) > div > div > button.btn.btn-primary';
    this.checkBox = '[data-testid="select-all"]';
    this.singledocumentcheckbox =
      '#documents_container > div.standard-rl-margin > div:nth-child(2) > div > div:nth-child(1) > div';
    this.nameField = '#signatureRequestName';
    this.createButton = 'body > div.modal > div > div > div > div.modal-footer > div > button.btn.btn-save';
    this.cancelButton = 'body > div.modal > div > div > div > div.modal-footer > div > button.btn.btn-cancel';
    this.cancelCreateDocButton = '.left-footer-buttons > .btn';
    this.removeDocButton =
      '#selected_documents_table > div > div.table-body.row > div > div:nth-child(1) > div > div:nth-child(3) > span';
    this.spinner = '[data-testid="overlay-spinner"]';
    this.downloadButton =
      '#documents_container > div.standard-rl-margin > div:nth-child(2) > div > div:nth-child(4) > button';
    this.backButton =
      'body > div.modal > div > div > div > div.modal-footer > div > div.right-footer-buttons > button.btn.btn-cancel';

    this.onScreen = '[name="onscreen"]';
    this.cancelOnScreen = '.modal-footer > .btn-secondary';
    this.createContractForSignatures =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div.row > div:nth-child(2) > button:nth-child(2)';
    this.signatureButton = '.pull-right > :nth-child(3)';
    this.onScreenLink = '#onscreen_link_0';
    this.signerMessageModal = '.d-flex > p';
    //Create signable document button
    this.signabledocumentbutton =
      '.ng-isolate-scope > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)';
    //document checkbox
    this.documentcheckbox = '[data-testid="selected"]';
    //save document button
    this.savedocumentbutton = '.btn-save';
    //next button
    this.nextButton = '.btn-save';
    //message field
    this.messagefield = '#message';
    this.signatureButton = '.pull-right > :nth-child(3)';
    this.alertmessage = '.alert-message';
    this.emailButton = '[name="email"]';
    this.alert = 'body > flash-alert > div > div.fade.alert.alert-danger.alert-dismissible.show > p';

    //Create Signature Request Modal fields locators
    this.dropdown = "[name='recipients.0.signer']";
    this.namefield = "[name='recipients.0.name']";
    this.emailfield = "[name='recipients.0.email']";
    this.signingRecipientsCancelButton = '.left-footer-buttons > .btn';
    this.recipient1CheckBox = '.form-check-input';
    this.recipient2CheckBox = '#recipients.2.included';
  }

  visitSignaturePage() {
    cy.contains(this.signature).click({ force: true });
    cy.url().should('include', 'signatures');
  }

  visitSignableDoc() {
    cy.get(this.signableDoc).click();
    cy.url().should('include', 'signable_documents');
  }

  visitSignatureTab() {
    cy.get(this.signatureTab).click();
    cy.url().should('include', 'estimate_documents');
  }

  contractButton() {
    cy.get(this.createAgreementButton).click();
    cy.url().should('include', 'contracts');
  }

  signableDocButton() {
    cy.get(this.createSignableDocButton).click({ force: true });
    cy.url().should('include', 'signature_request');
  }

  selectDocument() {
    cy.get('#documents_container', { timeout: 15000 }).should('be.visible');
    cy.get(this.singledocumentcheckbox).eq(0).click();
  }

  onScreenButton() {
    cy.get(this.onScreen).click();
  }

  createDocument() {
    cy.url().then((url) => {
      let jobId = url.split('/')[4];
      const url1 = Cypress.env('url1');
      let dynamicUrl = `${url1}jobs/${jobId}/documents/combine`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl
      }).as('combine');
      cy.get(this.createButton).click();
      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(201);
        cy.log(xhr.response.body.document.id);
        cy.contains('Task Completion Successful.');
      });
      cy.get(this.nextButton).click();
    });
  }

  validateApi() {
    const url1 = Cypress.env('url1');
    let id, id1;
    cy.get(this.createButton).click();
    cy.intercept(`${url1}signed_documents/validate`).as('validated');
    cy.get(this.nextButton).click();
    cy.wait('@validated').then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
      id = xhr.response.body.document.id;
      cy.log(`Document ID: ${id}`);
      cy.contains('Task Completion Successful.').should('be.visible');
      cy.intercept(`${url1}signed_documents/`).as('signeddoc');
      cy.get(this.onScreen).click();
      cy.wait('@signeddoc').then((sign) => {
        expect(sign.response.statusCode).to.eq(201);
        id1 = sign.response.body.signed_document.document_id;
        cy.log(`Document ID: ${id1}`);

        expect(id).to.eq(id1);
      });
    });
  }

  renameDocument() {
    cy.get(this.nameField).clear();
    cy.get(this.nameField).type('document renamed');
  }

  cancelOnScreenModal() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.cancelOnScreen).click();
    cy.contains('document renamed');
  }

  deleteDocument() {
    cy.get(this.checkBox).click({ force: true });

    cy.url().then((url) => {
      const url1 = Cypress.env('url1');
      let jobId = url.split('/')[4];
      let dynamicUrl = `${url1}jobs/${jobId}/documents/combine`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl
      }).as('combine');
      cy.get(this.createButton).should('be.enabled');
      cy.get(this.createButton).click();
      cy.get(this.nextButton).click();
      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(201);
        let docid = xhr.response.body.document.id;
        cy.contains('Task Completion Successful.');
        let deleteurl = `${url1}jobs/${jobId}/documents/${docid}`;
        console.log(deleteurl);

        cy.intercept({
          method: 'DELETE',
          url: deleteurl
        }).as('delete');
        cy.get(this.cancelCreateDocButton).click();
        cy.wait(2000);
        cy.wait('@delete').then((xhr) => {
          expect(xhr.response.statusCode).to.eq(204);
        });
      });
    });
  }

  titleDropdownVerification() {
    cy.get(this.dropdown).select('Sales Representative');
    cy.get(this.namefield).invoke('val').should('include', 'Saad');
    cy.get(this.emailfield).invoke('val').should('include', Cypress.env('adminUsername'));
  }

  viewSignature() {
    cy.get('#signatures > .k-link').click({ force: true });
    //cy.wait(4000);
    cy.get(this.signabledocumentbutton).click();
    cy.get(this.documentcheckbox).check();
    cy.get(this.savedocumentbutton).click();

    cy.get(this.nextButton).click();
    cy.get(this.messagefield).type('Should be able to type ').should('have.value', 'Should be able to type ');
  }

  clickSignature() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.signatureButton).click();
  }

  validateAlertMessage() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.alertmessage).should('have.text', 'Document validated successfully');
  }

  onScreenButton() {
    cy.get(this.onScreen).click();
  }

  sendEmailButton() {
    cy.get(this.emailButton).click();
  }

  noSignerAlert() {
    cy.get(this.alert).contains(
      "Error: The document didn't contain any fields for signers to fill out. Please attach a signable document or reach out to Support if you believe this is in error."
    );
  }

  emailNotifyVerify() {
    const url1 = Cypress.env('url1');
    let dynamicUrl = `${url1}/signed_documents/`;
    cy.intercept({
      method: 'POST',
      url: dynamicUrl
    }).as('emailnotify');
    cy.contains('Email').click();
    cy.wait('@emailnotify').then((notify) => {
      const email = notify.request.body;
      expect(email.notify).to.equal(true);
    });
  }

  createSignature() {
    cy.get(this.createContractForSignatures).click();
    cy.get(this.spinnerOverlay, { timeout: 10000 }).should('not.exist');
    cy.get(this.signatureButton).click();
    cy.get(this.spinnerOverlay, { timeout: 10000 }).should('not.exist');
  }

  emailSentVerification() {
    cy.contains('Email').click();
    cy.contains('Signature Document successfully sent.');
  }

  onScreenButtonVerification() {
    cy.get(this.spinnerOverlay, { timeout: 10000 }).should('not.exist');
    cy.get(this.onScreenLink)
      .should('have.css', 'color', 'rgb(255, 255, 255)', { timeout: 5000 })
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'https://sign-staging.remotesf.com/');
  }

  verifySignerVerbiageText() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.signerMessageModal).should(
      'have.text',
      'In the event there is a signer(s) missing, please ensure all necessary job documents are included for the contract and confirm complete contact/address information of the signing recipients below. If you have questions or need further assistance, please contact support.'
    );
  }

  clickCreateButton() {
    cy.get(this.createButton).click();
  }

  blankBoxVerify() {
    cy.get(this.createButton).click({ force: true });
    cy.get('#webviewer-1', { timeout: 10000 }).should('be.visible');
    cy.wait(15000);
    cy.get('#webviewer-1').then(function ($iframe) {
      const iFrameC = $iframe
        .contents()
        .find(
          '#app > div.App > div.HeaderToolsContainer > div > div > div.tool-group-buttons-container > div > div:nth-child(5) > button',
          { timeout: 30000 }
        );

      cy.wrap(iFrameC)
        .click({ force: true })
        .then(() => {
          const xOffset = 0; // Adjust the X coordinate as needed
          const yOffset = 100; // Adjust the Y coordinate as needed

          cy.wrap($iframe)
            .trigger('mousemove', { clientX: xOffset, clientY: yOffset })
            .then(() => {
              const anotherElement = $iframe
                .contents()
                .find(
                  '#app > div.App > div.content > div.document-content-container > div.measurement-container > div.DocumentContainer'
                );
              cy.wrap(anotherElement).click({ force: true });
            });
        });
    });
    cy.get(this.nextButton).should('be.visible').click();
    cy.get(this.spinner, { timeout: 10000 }).should('be.visible');
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    this.noSignerAlert();
    cy.get(this.createButton).click();
    cy.get(this.nextButton).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    this.noSignerAlert();
  }

  Cancelsigningrecipientsmodal() {
    cy.get(this.signingRecipientsCancelButton).click();
  }

  uniqueUserNameValidation() {
    cy.get(this.recipient1CheckBox).check({ force: true });
    cy.contains('Name must be unique');
  }

  singleSignerVerify() {
    cy.get(this.spinnerGraphic, { timeout: 10000 }).should('not.exist');
    cy.get(this.recipient1CheckBox, { timeout: 10000 }).should('be.visible').eq(2).uncheck();
    this.onScreenButton();
    cy.get(this.spinnerGraphic, { timeout: 10000 }).should('not.exist');
    cy.get('.table-row').should('not.contain.text', 'saadusmani92@gmail.com');
  }
}

export default Signature;
