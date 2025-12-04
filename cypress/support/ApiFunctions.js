/// <reference types="cypress" />
class ApiFunctions {
  setAuthorizationToken() {
    return cy
      .request({
        url: Cypress.env('url'),
        method: 'POST',
        form: true,
        body: {
          email: Cypress.env('adminUsername'),
          password: Cypress.env('adminPassword')
        }
      })
      .then((response) => {
        return response.body.token;
      });
  }

  userCountApiEqual100() {
    this.setAuthorizationToken().then((authorization) => {
      const url1 = Cypress.env('url1');
      const page = 1;
      const perPage = 101;
      const url = `${url1}users?page=${page}&per_page=${perPage}`;
      cy.log(`API URL: ${url}`);
      cy.request({
        method: 'GET',
        url: url,
        headers: {
          Authorization: `Bearer ${authorization}`
        }
      }).then((updatedResponse) => {
        expect(updatedResponse.status).to.eq(200);
        expect(updatedResponse.body).to.have.property('users').and.to.be.an('array');

        const usersCount = updatedResponse.body.users.length;
        expect(usersCount).to.be.eq(100);
      });
    });
  }

  userCountApiGreaterThan100() {
    this.setAuthorizationToken().then((authorization) => {
      const url1 = Cypress.env('url1');
      const perPage = 101;
      const url = `${url1}users?per_page=${perPage}`;
      cy.log(`API URL: ${url}`);
      cy.request({
        method: 'GET',
        url: url,
        headers: {
          Authorization: `Bearer ${authorization}`
        }
      }).then((updatedResponse) => {
        expect(updatedResponse.status).to.eq(200);
        expect(updatedResponse.body).to.have.property('users').and.to.be.an('array');

        const usersCount = updatedResponse.body.users.length;
        expect(usersCount).to.be.greaterThan(100);
      });
    });
  }

  setAuthorizationTokenWithNGStorage(email = Cypress.env('adminUsername'), password = Cypress.env('adminPassword')) {
    return cy
      .request({
        url: Cypress.env('url'),
        method: 'POST',
        form: true,
        body: {
          email: email,
          password: password
        }
      })
      .then((res) => {
        const accessToken = res.body.token;

        localStorage.setItem('ngStorage-refresh', JSON.stringify({ token: accessToken }));
        localStorage.setItem(
          'ngStorage-currentUser',
          JSON.stringify({ token: accessToken, id: res.body.user.id, email: res.body.user.email })
        );

        return { accessToken };
      });
  }

  updateandActivateProductMsrp(newMsrp) {
    this.setAuthorizationTokenWithNGStorage('174@oneclickcontractor.com', '1').then(({ accessToken }) => {
      const url1 = Cypress.env('url1');
      const productId = Cypress.env('productid');
      const orgId = Cypress.env('orgid');
      const priceListId = Cypress.env('pricelistid');

      cy.request({
        method: 'PATCH',
        url: `${url1}products/${productId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: {
          msrp: newMsrp
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.product.msrp).to.equal(newMsrp);

        cy.request({
          method: 'POST',
          url: `${url1}price_lists/${priceListId}/activate?${orgId}`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }).then((secondResponse) => {
          expect(secondResponse.status).to.equal(200);
        });
      });
    });
  }

  decoupleImageResponseVerify() {
    this.setAuthorizationToken().then((authorization) => {
      const url1 = Cypress.env('url1');
      const jobno = Cypress.env('jobId');
      const estimateno = Cypress.env('estimateId');

      const url = `${url1}/estimates/${estimateno}.pattern?job_id=${jobno}`;
      cy.log(`API URL: ${url}`);
      cy.request({
        method: 'GET',
        url: url,
        headers: {
          Authorization: `Bearer ${authorization}`
        }
      }).then((auth) => {
        expect(auth.status).to.eq(200);
        expect(auth.body.org.logo.url).to.exist;
        expect(auth.body.org.logo.thumb_url).to.exist;
        expect(auth.body.org.logo.small_url).to.exist;
        expect(auth.body.org.logo.medium_url).to.exist;
        expect(auth.body.org.logo.large_url).to.exist;
      });
    });
  }
}

export default ApiFunctions;
