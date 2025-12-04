/// <reference types = "Cypress" />

class Inspection {
  constructor() {
    (this.addtoagreement =
      "div[id*='inspection-tabpane-'] > :nth-child(1) > .card-title > .justify-content-end > :nth-child(1) > .form-group > .toggle-container > #switch-normal"),
      (this.addtopresentation =
        "div[id*='inspection-tabpane-'] > :nth-child(1) > .card-title > .justify-content-end > :nth-child(2) > .form-group > .toggle-container > #switch-normal"),
      (this.save = '.inspection.row > :nth-child(1) > :nth-child(1)'),
      (this.emailinspection = '.inspection.row > :nth-child(1) > :nth-child(2)');
    this.checkboxtext = "label[for='inspection_include_all_items']";
  }

  checkAddAllToAgreement() {
    cy.get(this.addtoagreement).first().check();
  }

  checkAddAllToPresentation() {
    cy.get(this.addtopresentation).first().check();
  }

  saveChanges() {
    cy.get(this.save).click();
  }

  clickOnEmailInspection() {
    cy.get(this.spinner, { timeout: 50000 }).should('not.exist');
    cy.get(this.emailinspection).click();
  }

  validateModalCheckText() {
    cy.get(this.checkboxtext).should('have.text', 'Include All Inspection Items');
  }
}

export default Inspection;
