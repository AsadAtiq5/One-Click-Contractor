/// <reference types="cypress" />
class AdministrationPresentation {
  constructor() {
    //Locators
    this.presentationNames = '.table-body.row [data-testid="Presentation"] > .break-word';
    this.spinner = '#spinner-overlay';
    this.createNewFolder = 'Create a New Folder';
    this.addpresentation = 'Add Presentations';
    this.saveButton = '[data-testid="save-button"]';
    this.writeName = '[data-testid="name-editing"]';
    this.firstJob = 'tbody > :first-child';
    (this.folderCard = '.card-body'), (this.threeDotButton = '[data-testid="dropdown-button"]');
  }

  addPresentationFromFixture() {
    this.addPresentation();
    cy.get(".presentations input[type='file']").attachFile('document.pdf');
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    let matchFound = false;
    cy.get(this.presentationNames)
      .each(($file) => {
        const fileName = $file.text();
        if (fileName.includes('document.pdf')) {
          matchFound = true;
        }
      })
      .then(() => {
        expect(matchFound, `No file name matches ${'document.pdf'}`).to.be.true;
      });
  }

  addPresentation() {
    cy.contains(this.addpresentation).click();
  }

  addNewFolder() {
    cy.contains(this.createNewFolder).click({ force: true });
  }

  saveFolder() {
    cy.get(this.saveButton).click({ multiple: true });
    cy.contains('Saved folder successfully');
    cy.contains('Automating New Folder in Presentation');
  }

  writeNames(pname) {
    cy.get(this.writeName).click().type(pname);
  }

  openAddedFolder() {
    cy.contains('Automating New Folder in Presentation').click();
  }

  openJob() {
    cy.get(this.firstJob).click();
  }

  deleteFolder() {
    cy.get(this.folderCard)
      .contains('Automating New Folder in Presentation')
      .each(($element) => {
        if ($element.text().includes('Automating New Folder in Presentation')) {
          cy.wrap($element).parents(this.folderCard).find(this.threeDotButton).click();
          cy.contains('Delete').click();
        }
      });
  }
}

export default AdministrationPresentation;
