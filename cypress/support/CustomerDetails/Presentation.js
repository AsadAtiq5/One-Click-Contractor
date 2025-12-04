/// <reference types = "Cypress" />
class Presentation {
  constructor() {
    this.presentation = '#presentation-mode-off';
    this.presentationstart = '#presentation-mode-start';
    this.videocamerapresentation = '.fa-video-camera';
    this.leftsidepresentation = '[data-testid="gridContainer"] > :nth-child(1) > .card-footer';
    this.fullscreenbutton = 'button.btn-link i.fa.fa-expand';
    this.closebuttononly = '.pull-right > .fullscreen';
    this.stoppresentation = '#presentation-mode-stop';
    this.alert = 'body > flash-alert > div';
    this.spinner = '#spinner-overlay';
    this.currentnav = '.nav > .active';
    this.existing = "[data-rb-event-key='existing']";
    this.presentationName = 'document.pdf';
    this.presentationNamesLocator = '.grid-container p';
  }

  presentationFromTopMenu() {
    cy.get(this.spinner, { timeout: 600000 }).should('not.exist');
    cy.get(this.alert, { timeout: 60000 }).should('not.be.visible');
    cy.get(this.presentation).click();
    cy.get(this.presentationstart).click();
    cy.get(this.stoppresentation, { timeout: 600000 }).should('be.visible');
  }

  videoCameraPresentation() {
    cy.get(this.presentation).click();
    cy.get(this.presentationstart).click();
    cy.get(this.videocamerapresentation).click();
  }

  presentationIniFrame() {
    cy.get(this.leftsidepresentation).click();
    cy.get(this.fullscreenbutton).click();
    cy.contains('Close');
  }

  dynamicSectionVerification() {
    cy.get(this.currentnav)
      .should('exist')
      .and('not.be.empty')
      .invoke('text')
      .then((text) => {
        expect(text).to.contain('Dynamic');
      });
    cy.url().should('include', '/dynamic');
  }

  existingSectionVerification() {
    cy.get(this.currentnav)
      .should('exist')
      .and('not.be.empty')
      .invoke('text')
      .then((text) => {
        expect(text).to.contain('Existing');
      });
    cy.url().should('include', '/existing');
  }

  clickExisting() {
    cy.get(this.existing).click();
  }

  presentationVerification() {
    let matchFound = false;
    cy.get(this.presentationNamesLocator)
      .each(($file) => {
        const fileName = $file.text();
        if (fileName.includes(this.presentationName)) {
          matchFound = true;
        }
      })
      .then(() => {
        expect(matchFound, `No file name matches ${'document.pdf'}`).to.be.true;
      });
  }

  openFolder() {
    cy.contains('Automating New Folder in Presentation').click();
  }

  continueConfirmation() {
    cy.get('[data-testid="ok-button"]', { timeout: 2000, optional: true }).click();
  }

  deletedFolderVerification() {
    cy.contains('Automating New Folder in Presentation').should('not.exist');
  }
}

export default Presentation;
