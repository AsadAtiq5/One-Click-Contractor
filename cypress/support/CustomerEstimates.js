/// <reference types = "Cypress" />
class CustomerEstimates {
  constructor() {
    // Estimate Name

    this.estimatesname = '#estimate_name';
    this.editestimatesname = '.ng-scope > .rsf-edit-link';
    this.saveestimatename = '#save-estimate-name';
    this.spinner = '#spinner-overlay';
    this.waarning = '.fa-warning';

    //producttabs
    this.overviewtab = '#uitour030 > .nav-link';
    this.includedtab = ':nth-child(2) > .nav-link';
    this.optionstab = ':nth-child(3) > .nav-link';
    this.addgrouptab = '#uitour040 > .nav-link';

    //add product(s)
    this.selectproductdropdown = '.dd-header';
    this.selectproductsearchbox = '.search-box > .form-control';
    this.selectedproduct = '#tour-step-product-selector > ul > span > li > div > div > div';
    this.backtoallproducts = '.back';
    this.productname = '.col-md-4 > .form-control';
    this.productdescription = '#estimate-li-description';
    this.productquantity = '#estimate-li-quantity';
    this.productunit = '#uom';
    this.productunitprice = ':nth-child(2) > .col-lg-7 > :nth-child(1) > :nth-child(1) > .form-control';
    this.productlabor = ':nth-child(2) > .col-lg-7 > :nth-child(1) > :nth-child(2) > .form-control';
    this.productmarkup = '.form-check-input';
    this.discount = '#estimate-discounts';
    this.productsaveitembutton = '#eli-save-changes';
    this.productcancelitembutton = '#eli-cancel';
    this.productdeleteitembutton = '.editable-footer > .pull-right';
    this.addlineitem = '#estimate-add-li';
    this.addlineitemid = '#eg-add-line-item-bottom';
    this.addfile = '#tabs-tabpane-files > div > div > div > table > thead > tr > th:nth-child(4) > div';
    this.selectProductOption = 'button.btn.btn-outline-success';

    //payment estimator
    this.estimatestartdatecalendar = ':nth-child(1) > .dl-vertical > dd > .input-group > .input-group-btn > .btn > .fa';
    this.estimatestartdatefield = '#estimate-start-date';
    this.estimateenddatecalendar = '#estimate-end-date';
    this.estimateenddatefield = ':nth-child(2) > .dl-vertical > dd > .input-group >  .form-control';
    this.paymentestimatorbutton = '#payment-estimator';
    this.paymentestimatoramount = '#amount';
    this.paymentestimatorterms = '#payments';
    this.paymentestimatorrate = '#rate';
    this.paymentestimatorcalculatebutton = '.form-section-content > :nth-child(1) > :nth-child(3) > .btn';

    //sales tax
    this.addsalestaxbutton = '#estimate-sales-tax-expand';
    this.salestaxtype = '#default_taxable_amount';
    this.addsalestaxtaxableamount = '#taxable_amount';
    this.salestaxrate = '#tax_rate';

    //add discount
    this.discountbutton = '#estimate-discounts';
    this.adddiscountdropdown = '.col-md-8 > .form-control';
    this.adddiscountbutton = '#estimate-add-discount';
    //add markup
    this.addmarkupbutton = '#estimate-mark-up-expand';
    this.addproductmarkup = '#product_markup';
    this.addlabormarkup = '#labor_markup';

    //templates section
    this.addtemplate = '#split-button';
    this.mysavedtemplates = ':nth-child(2) > [data-testid="EstimateTemplate"] > .break-word';
    this.savetemplatedropdown = '.tour-save-template';
    this.savetemplatebutton = '#estimate-template-save';
    this.savetemplatename = '#name';
    this.templatesavebutton = '.btn-primary';
    this.closemodalbutton = '#job-estimate-close';

    //estimate listing page
    this.editestimates = '.rsf-edit-link';
    this.generatecsv = '.rsf-excel-link';
    this.generateproposals = '.rsf-pdf-link';
    this.generateagreements = '.rsf-clipboard-link';
    this.generatecostsheets = '.rsf-money-link';
    this.generateremeasurecsvs = '.rsf-ruler-link';
    this.generatecommission = "span[title='Calculate Commission']";

    //estimate global buttons
    this.saveestimatebutton = '.tour-save-estimate > .ng-binding';
    this.backtoallestimatelistings = '.col-md-6 > .btn-cancel';

    //estimate product amount
    this.productamount =
      '[ng-show="$ctrl.org.showDetailedUnitPrice(!$ctrl.navDisplay, $ctrl.groupType, $ctrl.hiddenLineItems)"]';
    this.quantity =
      '.estimate-table > .col-4 > :nth-child(1) > [ng-class="$ctrl.quantityStyle"] > .row > :nth-child(1)';
    this.fronttotalamount =
      '[ng-show="$ctrl.org.showDetailedPricing(!$ctrl.navDisplay, $ctrl.groupType, $ctrl.hiddenLineItems)"]';
    //buttons ids
    this.closeButton = '#job-estimate-close';
    this.selectEstimateButton = '.table > tbody > tr.ng-scope > :nth-child(2)';
    this.editButton = '.float-right > .rsf-edit-link';
    this.firstproduct = ':nth-child(2) > .col-12 > .form-section > .row > :nth-child(5) > .btn';
    this.secondproduct = ':nth-child(3) > .col-12 > .form-section > .row > :nth-child(5) > .btn';
    this.updateestimatechanges = '.active > .row > .offset-7 > .btn-save';
    this.closebutton = '#job-estimate-close';
    this.proposalstab = '#proposals > .k-link';
    this.unsavedchangesconfirmation = '.modal-footer > .btn-default';
    //open estimate
    this.openestimate = '.table > tbody > tr.ng-scope > :nth-child(2)';
    this.estimateselection = '.ng-pristine';
    //edit estimates
    this.editfirstestimate = '#-1  > .estimate-table > .col > .float-right > .rsf-edit-link';
    this.editsecondestimate = '#-2  > .estimate-table > .col > .float-right > .rsf-edit-link';
    // selected button
    this.selected = ':nth-child(2) > .col-12 > .form-section > .row > :nth-child(5) > .btn';
    // set default option
    this.setdefaultoption = '[ng-click="$ctrl.setDefaultOptions()"]';
    //update button
    this.updateestimate = '.active > .row > .offset-7 > .btn-save';
    //use default option
    this.usedefaultoption = '[ng-click="$ctrl.useDefaultOptions()"]';
    //product estimate checkbox
    this.productestimatecheckbox = ':nth-child(1) > .nav-link > .ng-binding > .fa';
    this.dropdown = '#estimate-template-dropdown';
    this.dropdownoptions = '#uitour000 > div.col-md-6 > div > ul';
    this.manualtrigger = '#manual-trigger';
    this.overrideamount = '#override_amount';
    this.decimalvalue1 = '54.897';
    this.othercredit = '#other_credit';
    this.decimalvalue2 = '100.983';
    this.submit = "button[type='submit']";
    this.zerovalue = '0';
    this.presentationButton = '#uitour000 > div.col-md-6 > price-presentation-button > button';
    this.presentationModal = 'body > div.fade.modal.show > div > div';
    this.alert = 'body > flash-alert > div > div';
    this.productMarkupClassName =
      'body > div.container-fluid > div > div > div.job-content > div > div > div > estimate-editor > div > div > div.rsf-tabs.ng-pristine.ng-untouched.ng-valid.ng-isolate-scope.ui-sortable.ng-not-empty > div > div.tab-pane.ng-scope.active > div:nth-child(2) > div:nth-child(8) > div > markup-editor > div.card > div > div:nth-child(1) > div.col-md-3 > div > label';
    this.laborMarkupClassName =
      'body > div.container-fluid > div > div > div.job-content > div > div > div > estimate-editor > div > div > div.rsf-tabs.ng-pristine.ng-untouched.ng-valid.ng-isolate-scope.ui-sortable.ng-not-empty > div > div.tab-pane.ng-scope.active > div:nth-child(2) > div:nth-child(8) > div > markup-editor > div.card > div > div:nth-child(2) > div.col-md-3 > div > label';
    this.productoptionqty = '.options-select input';
    this.productoptionselect = '.options-select button';

    //commission calculation
    this.commissiontablebody = 'tbody.pb-0';
    this.commissionaccordian = '.accordion';
  }

  estimateName(ename) {
    cy.get(this.estimatesname, { timeout: 35000 }).should('be.visible');
    cy.get(this.estimatesname).click().type(ename);
    cy.get(this.saveestimatename).click();
  }

  estimateNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((estimate) => {
      this.estimateName(estimate.ename);
    });
  }

  editEstimateName(estimaterename) {
    cy.get(this.editestimatesname).click();
    cy.get(this.estimatesname).click().clear().type(estimaterename);
    cy.get(this.saveestimatename).click();
  }

  editEstimateNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((editestimate) => {
      this.editEstimateName(editestimate.estimaterename);
    });
  }

  viewOverviewTab() {
    cy.get(this.overviewtab).click();
  }

  viewIncludedTab() {
    cy.get(this.includedtab).click();
  }

  viewOptionsTab() {
    cy.get(this.optionstab).click();
  }

  clickAddGroupTab() {
    cy.get(this.addgrouptab).click();
  }

  selectProduct(productqty) {
    cy.get(this.selectedproduct, { timeout: 2000 }).should('be.visible');
    cy.get(this.selectedproduct).click({ force: true });
    cy.get(this.productquantity).clear().click().type(productqty);
    cy.get(this.productsaveitembutton).click();
  }

  productName(productname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(productname, '{enter}');
  }

  productNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.productName(product.productname);
      this.selectProduct(product.productqty);
    });
  }

  // Product with default markup

  defaultMarkupProductName(defaultmarkupproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultmarkupproductname, '{enter}');
  }

  defaultMarkupProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultMarkupProductName(product.defaultmarkupproductname);
      this.selectProduct(product.productqty);
    });
  }

  defaultMarkupProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.productmarkupprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = parseFloat(price) * parseFloat(qty);
            expect(amount).to.eq(product.productmarkupdefaulttotalamount);
            cy.get(this.fronttotalamount).then(($totalamount) => {
              const totalamount = $totalamount.text().slice(1);
              expect(amount).to.eq(parseFloat(totalamount));
            });
          });
        });
      });
    });
  }

  //root default child default

  defaultMarkupChildDefaultProductName(defaultmarkupchilddefaultproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultmarkupchilddefaultproductname, '{enter}');
  }

  defaultMarkupDefaultChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultMarkupChildDefaultProductName(product.defaultmarkupchilddefaultproductname);
      this.selectProduct(product.productqty);
    });
  }

  defaultMarkupProductDefaultChildPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.defaultchildmarkupprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.productmarkupdefaultchildtotalamount);
          });
        });
      });
    });
  }

  //root default child yes

  defaultMarkupChildYesProductName(defaultmarkupchildyesproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultmarkupchildyesproductname, '{enter}');
  }

  defaultMarkupYesChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultMarkupChildYesProductName(product.defaultmarkupchildyesproductname);
      this.selectProduct(product.productqty);
    });
  }

  defaultMarkupProductYesChildPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.yeschildmarkupprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.productmarkupyeschildtotalamount);
          });
        });
      });
    });
  }

  // Root Default Child No

  defaultMarkupChildNoProductName(defaultmarkupchildnoproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultmarkupchildnoproductname, '{enter}');
  }

  defaultMarkupNoChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultMarkupChildNoProductName(product.defaultmarkupchildnoproductname);
      this.selectProduct(product.productqty);
    });
  }

  defaultMarkupProductNoChildPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.nochildmarkupprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.productmarkupnochildtotalamount);
          });
        });
      });
    });
  }

  // Product with markup no

  noMarkupNoProductName(nomarkupproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nomarkupproductname, '{enter}');
  }

  noMarkupProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noMarkupNoProductName(product.nomarkupproductname);
      this.selectProduct(product.productqty);
    });
  }

  noMarkupProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.noproductmarkupprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductmarkuptotalamount);
          });
        });
      });
    });
  }

  //Root Product with markup no and child default

  noMarkupDefaultChildProductName(nomarkupdefaultchildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nomarkupdefaultchildproductname, '{enter}');
  }

  noMarkupDefaultChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noMarkupDefaultChildProductName(product.nomarkupdefaultchildproductname);
      this.selectProduct(product.productqty);
    });
  }

  noMarkupDefaultChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.noproductmarkupdefaultchildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductmarkupdefaultchildtotalamount);
          });
        });
      });
    });
  }

  //Root Product with markup no and child yes

  noMarkupYesChildProductName(nomarkupyeschildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nomarkupyeschildproductname, '{enter}');
  }

  noMarkupYesChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noMarkupYesChildProductName(product.nomarkupyeschildproductname);
      this.selectProduct(product.productqty);
    });
  }

  noMarkupYesChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.noproductmarkupyeschildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductmarkupyeschildtotalamount);
          });
        });
      });
    });
  }

  //Root Product with markup no and child no
  noMarkupNoChildProductName(nomarkupnochildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nomarkupnochildproductname, '{enter}');
  }

  noMarkupNoChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noMarkupNoChildProductName(product.nomarkupnochildproductname);
      this.selectProduct(product.productqty);
    });
  }

  noMarkupNoChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.noproductmarkupnochildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductmarkupnochildtotalamount);
          });
        });
      });
    });
  }

  // Product with default markup yes
  yesMarkupProductName(yesmarkupproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesmarkupproductname, '{enter}');
  }

  yesMarkupProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesMarkupProductName(product.yesmarkupproductname);
      this.selectProduct(product.productqty);
    });
  }

  yesMarkupProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.productmarkupyesprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.productmarkupyestotalamount);
          });
        });
      });
    });
  }

  // Product with markup yes child default

  yesMarkupDefaultYesProductName(yesmarkupdefaultchildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesmarkupdefaultchildproductname, '{enter}');
  }

  yesMarkupDefaultYesProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesMarkupDefaultYesProductName(product.yesmarkupdefaultchildproductname);
      this.selectProduct(product.productqty);
    });
  }

  yesMarkupDefaultChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.yesproductmarkupdefaultchildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.yesproductmarkupdefaultchildtotalamount);
          });
        });
      });
    });
  }
  //Product with markup yes child No

  yesMarkupChildNoProductName(yesmarkupnochildnoproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesmarkupnochildnoproductname, '{enter}');
  }

  yesMarkupChildNoProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesMarkupChildNoProductName(product.yesmarkupnochildnoproductname);
      this.selectProduct(product.productqty);
    });
  }

  yesMarkupChildNoProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.yesproductmarkupchildnoprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.yesproductmarkupchildnototalamount);
          });
        });
      });
    });
  }

  //Product with markup yes child yes

  yesMarkupChildYesProductName(yesmarkupchildyesproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesmarkupchildyesproductname, '{enter}');
  }

  yesMarkupChildYesProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesMarkupChildYesProductName(product.yesmarkupchildyesproductname);
      this.selectProduct(product.productqty);
    });
  }

  yesMarkupChildYesProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productmarkupprice) => {
        const productprice = $productmarkupprice.text();
        expect(productprice).to.eq(product.yesproductmarkupchildyesprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.yesproductmarkupchildyestotalamount);
          });
        });
      });
    });
  }

  discountableProductName(discountableproductname, productqty) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(discountableproductname, '{enter}');
    cy.get(this.selectedproduct, { timeout: 2000 }).should('be.visible');
    cy.get(this.selectedproduct).click({ force: true });
    cy.get(this.productquantity).clear().click().type(productqty);
    cy.get(this.productsaveitembutton).click();
  }

  discountableProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.discountableProductName(product.discountableproductname, product.productqty);
    });
  }

  // Discountable Root Default

  defaultDiscountableProductName(defaultdiscountablesproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultdiscountablesproductname, '{enter}');
  }

  defaultDiscountableProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultDiscountableProductName(product.defaultdiscountablesproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  defaultDiscountableProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.productdiscountableprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.productdiscountabledefaulttotalamount);
          });
        });
      });
    });
  }

  //root default child default

  defaultDiscountableChildDefaultProductName(defaultdiscountablechilddefaultproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultdiscountablechilddefaultproductname, '{enter}');
  }

  defaultDiscountableChildDefaultProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultDiscountableChildDefaultProductName(product.defaultdiscountablechilddefaultproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  defaultDiscountableChildDefaultProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($defaultchilddiscountableprice) => {
        const productprice = $defaultchilddiscountableprice.text();
        expect(productprice).to.eq(product.defaultchilddiscountableprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.productdiscountabledefaultchildtotalamount);
          });
        });
      });
    });
  }

  //root default child yes

  defaultDiscountableChildYesProductName(defaultdiscountablechildyesproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultdiscountablechildyesproductname, '{enter}');
  }

  defaultDiscountableYesChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultDiscountableChildYesProductName(product.defaultdiscountablechildyesproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  defaultDiscountableProductYesChildPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.yeschilddiscountableprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.productdiscountableyeschildtotalamount);
          });
        });
      });
    });
  }

  // Root Default Child No

  defaultDiscountableChildNoProductName(defaultdiscountablechildnoproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(defaultdiscountablechildnoproductname, '{enter}');
  }

  defaultDiscountableNoChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.defaultDiscountableChildNoProductName(product.defaultdiscountablechildnoproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  defaultDiscountableProductNoChildPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.nochilddiscountableprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.productdiscountablenochildtotalamount);
          });
        });
      });
    });
  }

  // Product with discountable no

  noDiscountableNoProductName(nodiscountableproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nodiscountableproductname, '{enter}');
  }

  noDiscountableProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noDiscountableNoProductName(product.nodiscountableproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  noDiscountableProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.noproductdiscountableprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductdiscountabletotalamount);
          });
        });
      });
    });
  }

  //Root Product with discountable no and child default

  noDiscountableDefaultChildProductName(nodiscountabledefaultchildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nodiscountabledefaultchildproductname, '{enter}');
  }

  noDiscountableDefaultChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noDiscountableDefaultChildProductName(product.nodiscountabledefaultchildproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  noDiscountableDefaultChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.noproductdiscountabledefaultchildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductdiscountabledefaultchildtotalamount);
          });
        });
      });
    });
  }

  //Root Product with discountable no and child yes

  noDiscountableYesChildProductName(nodiscountableyeschildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nodiscountableyeschildproductname, '{enter}');
  }

  noDiscountableYesChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noDiscountableYesChildProductName(product.nodiscountableyeschildproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  noDiscountableYesChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.noproductdiscountableyeschildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.noproductdiscountableyeschildtotalamount);
          });
        });
      });
    });
  }

  //Root Product with discountable no and child no

  noDiscountableNoChildProductName(nodiscountablenochildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(nodiscountablenochildproductname, '{enter}');
  }

  noDiscountableNoChildProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.noDiscountableNoChildProductName(product.nodiscountablenochildproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  noDiscountableNoChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.noproductdiscountablenochildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.noproductdiscountablenochildtotalamount);
          });
        });
      });
    });
  }

  // Product with discountable yes

  yesDiscountableProductName(yesdiscountableproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesdiscountableproductname, '{enter}');
  }

  yesDiscountableProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesDiscountableProductName(product.yesdiscountableproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  yesDiscountableProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.productdiscountableyesprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.productdiscountableyestotalamount);
          });
        });
      });
    });
  }

  // Product with discountable yes child default

  yesDiscountableDefaultYesProductName(yesdiscountabledefaultchildproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesdiscountabledefaultchildproductname, '{enter}');
  }

  yesDiscountableDefaultYesProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesDiscountableDefaultYesProductName(product.yesdiscountabledefaultchildproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  yesDiscountableDefaultChildProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.yesproductdiscountabledefaultchildprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.yesproductdiscountabledefaultchildtotalamount);
          });
        });
      });
    });
  }
  //Product with discountable yes child No

  yesDiscountableChildNoProductName(yesdiscountablenochildnoproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesdiscountablenochildnoproductname, '{enter}');
  }

  yesDiscountableChildNoProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesDiscountableChildNoProductName(product.yesdiscountablenochildnoproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  yesDiscountableChildNoProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.yesproductdiscountablechildnoprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty;
            expect(amount).to.eq(product.yesproductdiscountablechildnototalamount);
          });
        });
      });
    });
  }

  //Product with discountable yes child yes

  yesDiscountableChildYesProductName(yesdiscountablechildyesproductname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(yesdiscountablechildyesproductname, '{enter}');
  }

  yesDiscountableChildYesProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.yesDiscountableChildYesProductName(product.yesdiscountablechildyesproductname);
      this.selectProduct(product.productqty);
      this.discountNameFromFixture();
    });
  }

  yesDiscountableChildYesProductPriceAssertion(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      cy.get(this.productamount).then(($productdiscountableprice) => {
        const productprice = $productdiscountableprice.text();
        expect(productprice).to.eq(product.yesproductdiscountablechildyesprice);

        cy.fixture(fixture).then((product) => {
          cy.get(this.quantity).then(($productqty) => {
            const qty = $productqty.text();
            const price = productprice.slice(1);
            const amount = price * qty - price * qty * 0.1;
            expect(amount).to.eq(product.yesproductdiscountablechildyestotalamount);
          });
        });
      });
    });
  }

  paymentEstimator(date, termtime, rate) {
    cy.get(this.estimatestartdatecalendar).click();
    cy.get(this.estimatestartdatefield).click().type(date);
    cy.get(this.paymentestimatorbutton).click();
    cy.get(this.paymentestimatoramount).click();
    cy.get(this.paymentestimatorterms).click().type(termtime);
    cy.get(this.paymentestimatorrate).click().type(rate);
    cy.get(this.paymentestimatorcalculatebutton).click();
  }

  paymentEstimatorFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((calculator) => {
      this.paymentEstimator(calculator.date, calculator.termtime, calculator.rate);
    });
  }

  addSalesTax(stax) {
    cy.get(this.addsalestaxbutton).click();
    cy.get(this.salestaxrate).type(stax);
  }

  salesTaxFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((saletax) => {
      this.addSalesTax(saletax.stax);
    });
  }

  addDiscount(discountname) {
    cy.get(this.discountbutton).click();
    cy.get(this.adddiscountdropdown).select(discountname, { force: true }).invoke('val');
    cy.get(this.adddiscountbutton).click();
  }

  discountNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((discount) => {
      this.addDiscount(discount.discountname);
    });
  }

  addMarkUp(productmarkup, labormarkup) {
    cy.get(this.addmarkupbutton).click();
    cy.get(this.addproductmarkup).click().type(productmarkup);
    cy.get(this.addlabormarkup).click().type(labormarkup);
  }

  addMarkupFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((markup) => {
      this.addMarkUp(markup.productmarkup, markup.labormarkup);
    });
  }

  saveEstimate() {
    cy.get(this.saveestimatebutton).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
  }

  newEstimateAssertion() {
    cy.contains('Estimate was successfully saved.');
  }

  addTemplateEstimate() {
    cy.get(this.addtemplate).click();
    cy.get(this.mysavedtemplates).click({ force: true });
  }

  saveTemplate() {
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.savetemplatedropdown).click({ force: true });
    cy.get(this.savetemplatebutton).click({ force: true });
    cy.get(this.savetemplatename).click().type('Test Template');
    cy.get(this.templatesavebutton).click();
  }

  newTemplateAssertion() {
    cy.contains('My Estimate Template Successfully Created.');
  }

  backToAllEstimatesListings() {
    cy.get(this.backtoallestimatelistings).should('be.visible').click({ force: true });
  }

  editEstimates() {
    cy.get(this.editestimates).should('be.visible').click({ force: true });
  }

  generatesProductCSV() {
    cy.get(this.generatecsv).should('be.visible').click({ force: true });
  }

  generatesProposal() {
    cy.get(this.generateproposals).should('be.visible').click({ force: true });
  }

  generatesAgreement() {
    cy.get(this.generateagreements).should('be.visible').click({ force: true });
  }

  generatesCostSheet() {
    cy.get(this.generatecostsheets).should('be.visible').click({ force: true });
  }

  generatesRemeasureCSV() {
    cy.get(this.generateremeasurecsvs).should('be.visible').click({ force: true });
  }

  restrictedUserEstimateTemplate() {
    cy.get(this.savetemplatedropdown).click({ force: true });
    cy.get(this.savetemplatebutton).click({ force: true });
    cy.get('.folder-card').should('not.exist');
  }

  sortItems() {
    cy.get(this.spinner, { timeout: 30000 }).should('not.exist');
    cy.get('.tour-save-template').click();
    cy.get('.dropdown-item').click();
    cy.get('.modal-open').click();
    cy.get('.modal-open').click();

    cy.get(':nth-child(2) > [data-testid="EstimateTemplate"] > :nth-child(1) > img').drag();
    // Do some tests here, for example check change in droppable background colors.
    cy.get(':nth-child(1) > [data-testid="EstimateTemplate"] > :nth-child(1) > img').drop();
  }

  estimateToProposal() {
    cy.get(this.closebutton).click();

    cy.get(this.unsavedchangesconfirmation).click();

    cy.get(this.proposalstab).click();

    cy.get(this.unsavedchangesconfirmation).click();
    cy.url().then((url) => {
      const url1 = Cypress.config('baseUrl');
      let jobId = url.split('/')[4];
      let dynamicUrl = `${url1}jobs/${jobId}/proposals`;
      cy.url().should('equal', dynamicUrl);
    });
  }

  openExistingEstimate() {
    cy.get(this.closebutton).click();
    cy.get(this.openestimate).click();
    cy.wait(2000);
    cy.get(this.proposalstab).click();

    cy.url().then((url) => {
      const url1 = Cypress.config('baseUrl');
      let jobId = url.split('/')[4];
      let proposalId = url.split('/')[6];
      let dynamicUrl = `${url1}jobs/${jobId}/proposals/${proposalId}`;
      cy.url().should('equal', dynamicUrl);
    });
  }

  estimateNotSelected() {
    cy.get(this.closebutton).click();
    cy.get(this.estimateselection).should('not.be.checked');
    cy.get(this.proposalstab).click();
    cy.url().then((url) => {
      const url1 = Cypress.config('baseUrl');
      let jobId = url.split('/')[4];
      let dynamicUrl = `${url1}jobs/${jobId}/proposals`;
      cy.url().should('equal', dynamicUrl);
    });
  }

  secondEstimateNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((estimate) => {
      this.estimateName(estimate.ename2);
    });
  }

  secondProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.productName(product.productname2);
      this.selectProduct(product.productqty);
    });
  }

  thirdEstimateNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((estimate) => {
      this.estimateName(estimate.ename3);
    });
  }

  thirdProductNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.productName(product.productname3);
      this.selectProduct(product.productqty);
    });
  }

  assertionAfterEditingEstimate() {
    cy.get(this.closebutton).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.selectEstimateButton).click();
    cy.get(this.editButton).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.firstproduct).click();
    cy.get(this.secondproduct).click();
    cy.get(this.updateestimatechanges).click();
    this.saveEstimate();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.editButton).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.firstproduct).should('have.text', 'Selected');
    cy.get(this.secondproduct).should('have.text', 'Selected');
  }

  setOptionsfeature() {
    cy.get(this.addlineitemid).dblclick();
    this.secondProductNameFromFixture();
    cy.get(this.editfirstestimate).click();
    cy.get(this.selected).click();
    cy.get(this.setdefaultoption).click();
    cy.get(this.updateestimate).click();
    cy.get(this.editsecondestimate).click();
    cy.get(this.usedefaultoption).click();
    cy.get(this.productestimatecheckbox)
      .should('have.class', 'fa')
      .should('have.class', 'fa-check')
      .should('have.class', 'checkmark')
      .should('have.class', 'ng-scope');
  }

  openDropdown() {
    cy.get(this.dropdown).click();
  }

  manuallyTriggerVisible() {
    cy.get(this.dropdownoptions).contains('Manually Trigger');
  }

  manuallyTriggerFieldsValidation(overrideamountfieldvalue, othercreditfieldvalue) {
    cy.get(this.overrideamount).clear();
    cy.get(this.overrideamount).type(overrideamountfieldvalue);
    cy.get(this.othercredit).clear();
    cy.get(this.othercredit).type(othercreditfieldvalue);
    cy.get(this.submit).click();
  }

  clickOnManualTrigger() {
    cy.get(this.manualtrigger).click();
  }

  manuallyTriggerVisibleWithSaveFirst() {
    cy.get(this.dropdownoptions).contains('Manually Trigger (save estimate first)');
  }

  manuallyTriggerNotVisible() {
    cy.get(this.dropdownoptions).should('not.have.value', 'Manually Trigger');
  }

  productCostVerification() {
    cy.url().then((url) => {
      let url1 = Cypress.env('url1');
      let estimateId = url.split('/')[4];
      let dynamicUrl = `${url1}jobs/${estimateId}/estimates?id=new`;
      cy.intercept({
        method: 'POST',
        url: dynamicUrl
      }).as('saveResponse');
      this.saveEstimate();
      cy.wait('@saveResponse').then((apiResponse) => {
        expect(apiResponse.response.statusCode).to.eq(201);
        const responseBody = apiResponse.response.body;
        let cost = responseBody.estimate.groups[0].line_items[0].cost;
        cy.fixture('estimates.json').then((data) => {
          expect(data.gaftimberlinenaturalshadowbarkwoodcost).to.equal(cost);
        });
      });
    });
  }

  presentatitonErrorVerify() {
    cy.get(this.presentationButton).click();
    cy.get(this.presentationModal).should('be.visible');
  }

  customLineItem() {
    cy.get(this.productname).type('Custom Product');
    cy.get(this.addfile).selectFile('cypress/fixtures/nosigners.pdf', {
      action: 'drag-drop'
    });
    cy.get(this.productsaveitembutton).click();
    cy.get(this.saveestimatebutton).click();
    cy.get(this.spinner, { timeout: 8000 }).should('not.exist');
    cy.get(this.alert, { timeout: 80000 }).should('not.exist');
    cy.get(this.dropdown).click();
    cy.contains('Duplicate').click();
    cy.contains('OK').click();
    cy.get(this.spinner, { timeout: 8000 }).should('not.exist');
    cy.get(this.alert).should(
      'not.contain.text',
      'Unknown Error - Please check your internet connection. If the problem persists, please contact support.'
    );
  }

  verifyMarkUpClasses() {
    cy.get(this.addmarkupbutton).click();
    cy.get(this.productMarkupClassName).should('have.text', 'Product Markup');
    cy.get(this.laborMarkupClassName).should('have.text', 'Labor Markup');
  }

  costSheetVerify() {
    const path = require('path');

    cy.url().then((url) => {
      const estiimateid = url.split('/')[6];
      this.backToAllEstimatesListings();
      this.generatesProductCSV();
      const downloadsFolder = Cypress.config('downloadsFolder');
      const fixturesFolder = Cypress.config('fixturesFolder');
      cy.readFile(path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`)).should('exist');
      const xlsPath = path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`);
      cy.task('convertXlsxToJson', xlsPath);
      cy.readFile(path.join(fixturesFolder, `Roof Measurment - ${estiimateid}.csv.json`)).then((jsonData) => {
        const unitCostValue = jsonData.find((item) => item.Type === 'product_option')['Unit Cost'];
        expect(unitCostValue).to.equal(10);
      });
    });
  }

  productOptionEstimateLineItems() {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type('Test Product With Options');
    cy.get(this.selectedproduct).click();
    cy.get(this.selectProductOption).eq(0).click();
    cy.get(this.productsaveitembutton).click();
  }

  addProductEstimateLineItem() {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type('Test Product With Options');
    cy.get(this.selectedproduct).click();
    cy.get(this.productsaveitembutton).click();
  }

  msrpVerify(newMsrp) {
    const path = require('path');
    cy.url().then((url) => {
      const estiimateid = url.split('/')[6];
      this.backToAllEstimatesListings();
      this.generatesProductCSV();
      const downloadsFolder = Cypress.config('downloadsFolder');
      const fixturesFolder = Cypress.config('fixturesFolder');
      cy.readFile(path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`)).should('exist');
      const xlsPath = path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`);
      cy.task('convertXlsxToJson', xlsPath);
      cy.readFile(path.join(fixturesFolder, `Roof Measurment - ${estiimateid}.csv.json`)).then((jsonData) => {
        const msrpValue = jsonData.find((item) => item.Type === 'product')['MSRP'];
        expect(msrpValue).to.equal(newMsrp);
      });
    });
  }

  addNewLineItem() {
    cy.get(this.editestimates).click();
    cy.get(this.addlineitemid).click();
    cy.get(this.selectproductsearchbox).click().type('Test Product With Options');
    cy.get(this.selectedproduct).click();
    cy.get(this.productsaveitembutton).click();
    cy.get(this.saveestimatebutton).click();
  }

  msrpTotallVerify() {
    const path = require('path');
    cy.get(this.editestimates).click();
    cy.url().then((url) => {
      this.backToAllEstimatesListings();
      cy.get(this.editestimates).click();
      cy.get(this.waarning).should('be.visible');
      const estiimateid = url.split('/')[6];
      const downloadsFolder = Cypress.config('downloadsFolder');
      const fixturesFolder = Cypress.config('fixturesFolder');

      cy.readFile(path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`)).should('exist');

      const xlsPath = path.join(downloadsFolder, `Roof Measurment - ${estiimateid}.csv`);
      cy.task('convertXlsxToJson', xlsPath);

      cy.readFile(path.join(fixturesFolder, `Roof Measurment - ${estiimateid}.csv.json`)).then((jsonData) => {
        const MSRPValue = jsonData.find((item) => item.Type === 'total_msrp')['MSRP'];
        expect(MSRPValue).to.equal(60);
      });
    });
  }

  selectProductOptionQty(productqty) {
    cy.get(this.selectedproduct, { timeout: 2000 }).should('be.visible');
    cy.get(this.selectedproduct).click({ force: true });
    cy.get(this.productquantity).clear().click().type(productqty);
    cy.get(this.productoptionqty).first().clear().click().type(productqty);
    cy.get(this.productoptionselect).first().click();
    cy.get(this.productsaveitembutton).click();
  }

  productOptionName(productname) {
    cy.get(this.selectproductdropdown).click();
    cy.get(this.selectproductsearchbox).click().type(productname, '{enter}');
  }

  productOptionNameFromFixture(fixture = 'estimates') {
    cy.fixture(fixture).then((product) => {
      this.productOptionName(product.optionproduct);
      this.selectProductOptionQty(product.productqty);
    });
  }

  closeEstimate() {
    cy.get(this.closeButton).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
  }

  costverification() {
    const csvPattern = 'cypress/downloads/Roof\\ Measurment\\ -\\ *.csv';
    cy.wait(5000);
    cy.exec(`ls -t ${csvPattern} | head -n 1`).then((result) => {
      if (result.stdout) {
        const csvFilePath = result.stdout.trim();
        cy.readFile(csvFilePath, { encoding: 'utf-8' }).then((csvData) => {
          const rows = csvData
            .trim()
            .split('\n')
            .map((row) => row.split(','));
          const productOptionRow = rows.find((row) => row[2] === 'product_option');
          if (productOptionRow) {
            const quantity = parseFloat(productOptionRow[7]);
            const productPrice = parseFloat(productOptionRow[9]);
            const expectedExtPrice = quantity * productPrice;
            const extPrice = parseFloat(productOptionRow[13]);
            expect(expectedExtPrice).to.equal(extPrice);
          } else {
            throw new Error('No row found for product_option in the CSV data.');
          }
        });
      } else {
        throw new Error('No CSV file found matching the pattern.');
      }
    });
  }

  commissionCalculationVerificationCustomConfig() {
    cy.get(this.generatecommission).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.commissiontablebody).contains('Sale Price').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Cost').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Overhead Rate').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Commission Rate').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Formula').should('exist').and('be.visible');
  }

  commissionCalculationVerificationGreenline() {
    cy.get(this.generatecommission).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.commissiontablebody).contains('Greenline').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Sale Price').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Less Adm Fee').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('% Greenline').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Adj to Commission').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Base Commission').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('% Payable').should('exist').and('be.visible');
    cy.get(this.commissiontablebody).contains('Estimated Commission').should('exist').and('be.visible');
  }

  commissionCalculationVerificationMarginWithOverhead() {
    cy.get(this.generatecommission).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get(this.commissionaccordian).contains('Sale Price').should('exist').and('be.visible');
    cy.get(this.commissionaccordian).contains('After Overhead').should('exist').and('be.visible');
    cy.get(this.commissionaccordian).contains('After Cost').should('exist').and('be.visible');
    cy.get(this.commissionaccordian).contains('Estimated Commission').should('exist').and('be.visible');
  }

  commissionCalculationVerificationFormula() {
    cy.get(this.generatecommission).click();
    cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    cy.get('.col-lg-8 input').should('have.attr', 'value').and('not.eq', '');
    cy.get('.mt-2.text-monospace span').eq(0).should('exist').and('not.be.empty');
  }
}

export default CustomerEstimates;
