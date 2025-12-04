/// <reference types="cypress" />
class Scheduler {
  constructor() {
    //Locators
    this.spinner = '#spinner-overlay';
    this.weekView = '.fc-timeGridWeek-button';
    this.dayView = '.fc-timeGridDay-button';
    this.assign = '.css-hlgwow > .css-19bb58m';
    this.assignMainField = '.css-hlgwow';
    this.user = '#react-select-3-input';
    this.menu = '.css-qr46ko';
    this.menuOption = '#react-select-2-option-0';
    this.menuOption1 = '#react-select-3-option-0';
    this.title = '#summary';
    this.verifyassign = Cypress.env('assign');
    this.verifyuser = Cypress.env('users');
    this.datetext = '.fc-toolbar-title';
    this.alert = '.alert-message';
    this.previousbutton = '.fc-prev-button.btn.btn-primary';
  }

  viewWeekScheduler() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.weekView).click().should('not.be.disabled');
  }

  viewDayScheduler() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.dayView).click().should('not.be.disabled');
  }

  assignToField() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.assign).click().should('not.be.disabled');
  }

  userField() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.user).click().should('not.be.disabled');
  }

  assignToDiffUser() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.assign).then(($usermenu1) => {
      Cypress.dom.isDom($usermenu1);
    });
    cy.get(this.assign).click().type('Test OCC').wait(2000);
    cy.get(this.menuOption).click();
  }

  multipleUsers() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.user).then(($usermenu1) => {
      Cypress.dom.isDom($usermenu1);
    });
    cy.get(this.user).click().type('Test OCC').wait(2000);
    cy.get(this.menuOption1).click();
    cy.get(this.user).click().type('QA Two').wait(2000);
    cy.get(this.menuOption1).click();
  }

  selectedLoginUser() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.assignMainField).contains('Saad The Sales Rep');
  }

  verifyLoggedInUsers() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.user).then(($usermenu) => {
      Cypress.dom.isDom($usermenu);
    });
    cy.get(this.menu).then(($verifyusers) => {
      const users = $verifyusers.text();
      expect(users).to.eq(this.verifyuser);
    });
  }

  verifyAssignToUsers() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get(this.assign).then(($assigntomenu) => {
      Cypress.dom.isDom($assigntomenu);
    });
    cy.wait(1000);
    cy.get(this.menu).then(($verifyassigntousers) => {
      const assignusers = $verifyassigntousers.text();
      expect(assignusers).to.eq(this.verifyassign);
    });
  }

  verifyAppointmentOfUser() {
    cy.contains('8:30').click({ force: true });
    cy.get(this.title).invoke('val').should('include', 'This is test appointment');
  }

  recursiveFunction() {
    cy.get(this.previousbutton)
      .click()
      .then(() => {
        cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
        cy.get(this.datetext)
          .invoke('text')
          .then((innerText) => {
            if (innerText.trim() !== 'Dec 3 – 9, 2023') {
              this.recursiveFunction();
            } else {
              cy.log('Assertion passed');
            }
          });
      });
    cy.get(this.alert, { timeout: 20000 }).should(
      'have.text',
      'You have reached the limit on the number of appointments we can load and display.  To see all the appointments please choose a view with a smaller timeframe.'
    );
  }
}

export default Scheduler;
