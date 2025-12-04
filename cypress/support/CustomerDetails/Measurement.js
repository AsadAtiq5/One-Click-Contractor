/// <reference types = "Cypress" />

class Measurement {
  constructor() {
    this.measurementNavigation = '#measurements';
    this.saveButton = '.col-md-4 > .btn-light';
    this.editButton =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div.mb-3 > div > div > div.col-md-7 > div > button:nth-child(3)';
    this.importButton =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div.mb-3 > div > div > div.col-md-7 > div > button:nth-child(1)';
    this.uploadButton = '.col-md-12 > .text-center > .btn';
    this.spinner = '#spinner > img';
    //area(Sqft)
    this.totalarea = '#roof_total_area';
    this.flatarea = '#roof_flat_area';
    this.higharea = '#roof_high_roof_area';
    this.pitchareafortotalarea = '#roof_13p_area';
    this.area = '#roof_5pw_total_area';
    //soffit(level frieze)
    this.flatShallowArea = '#roof_flat_shallow_area';
    this.lowsCopeArea = '#roof_low_slope_area';
    this.avgSlopArea = '#roof_average_slope_area';
    this.steepSlopeArea = '#roof_steep_slope_area';
    this.ultraSteepSlopeArea = '#roof_ultra_steep_slope_area';
    this.slopedArea = '#roof_sloped_area';
    this.pitchAreaSoffit = '#roof_79_area';

    //ridge
    this.ridge = '#roof_ridge';
    this.hip = '#roof_hip';
    this.ridgeHip = '#roof_ridge_hip';
    this.valley = '#roof_valley';
    this.downSpoutElbows = '#roof_downspout_elbows';
    this.downSpoute = '#roof_downspouts';
    this.gutter = '#roof_gutter_miters';
    this.pitchAreaRidge = '#roof_1012_area';

    //eave
    this.eave = '#roof_eave';
    this.rake = '#roof_rake';
    this.perimeter = '#roof_perimeter';
    this.stepFlashing = '#roof_step_flashing';
    this.headWallFlashing = '#roof_headwall_flashing';
    this.totalFlashing = '#roof_total_flashing';
    this.valleyEave = '#roof_valley_eave';
    this.valley = '#roof_valley_eave_rake';

    //window

    this.window =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div.mb-3 > div > div > div.col-md-7 > div > button:nth-child(2)';
    this.name = '#name';
    this.location = '#location';
    this.quantity = '#quantity';
    this.measurementType = '#type';
    this.level = '#level';
    this.width = '#width';
    this.height = '#height';
    this.windowsave = '.btn-save';
    this.cancel =
      'body > div.modal.fade.ng-scope.ng-isolate-scope.show > div > div > div > form > div.modal-footer > button.btn.btn-cancel';
    this.ui = '#ui';
    this.tools = '.float-right > .dropdown-toggle';
    this.fencingTool = 'Fencing Tool';
    this.exportFenceDrawing = '#fence-export-button';
    this.map = '#map';
    this.finsh = '.leaflet-draw-actions > :nth-child(1) > a';
  }

  slidingArea(stotalArea, sflatArea, shighArea, spitchArea) {
    cy.get(this.editButton).click();
    cy.get(this.flatarea).clear().type(stotalArea);
    cy.get(this.totalarea).clear().type(sflatArea);
    cy.get(this.higharea).clear().type(shighArea);
    cy.get(this.pitchareafortotalarea).clear().type(spitchArea);
  }

  soffitArea(
    sflatshallow,
    slowsCopeArea,
    savgSlopArea,
    ssteepSlopeArea,
    sultraSteepSlopeArea,
    sslopedArea,
    spitchAreaSoffit
  ) {
    cy.get(this.flatShallowArea).clear().type(sflatshallow);
    cy.get(this.lowsCopeArea).clear().type(slowsCopeArea);
    cy.get(this.avgSlopArea).clear().type(savgSlopArea);
    cy.get(this.steepSlopeArea).clear().type(ssteepSlopeArea);
    cy.get(this.ultraSteepSlopeArea).clear().type(sultraSteepSlopeArea);
    cy.get(this.slopedArea).clear().type(sslopedArea);
    cy.get(this.pitchAreaSoffit).clear().type(spitchAreaSoffit);
  }

  ridgeArea(sridge, ship, sridgeHip, svalley, sdownSpoutElbows, sdownSpoute, sgutter, spitchAreaRidge) {
    cy.get(this.ridge).clear().type(sridge);
    cy.get(this.hip).clear().type(ship);
    cy.get(this.ridgeHip).clear().type(sridgeHip);
    cy.get(this.valley).clear().type(svalley);
    cy.get(this.downSpoutElbows).clear().type(sdownSpoutElbows);
    cy.get(this.downSpoute).clear().type(sdownSpoute);
    cy.get(this.gutter).clear().type(sgutter);
    cy.get(this.pitchAreaRidge).clear().type(spitchAreaRidge);
  }

  eaveArea(seave, srake, sperimeter, sstepFlashing, sheadWallFlashing, stotalFlashing, svalleyEave, svalleyEaveRake) {
    cy.get(this.eave).clear().type(seave);
    cy.get(this.rake).clear().type(srake);
    cy.get(this.perimeter).clear().type(sperimeter);
    cy.get(this.stepFlashing).clear().type(sstepFlashing);
    cy.get(this.headWallFlashing).clear().type(sheadWallFlashing);
    cy.get(this.totalFlashing).clear().type(stotalFlashing);
    cy.get(this.valleyEave).clear().type(svalleyEave);
    cy.get(this.valley).clear().type(svalleyEaveRake);
  }

  visitmMeasurement() {
    cy.get(this.measurementNavigation).click();
    cy.url().should('include', '/measurements');
  }

  addMeasurement() {
    cy.contains('Save Changes').click();
    cy.get(this.window).click();
  }

  windowMeasurement(wname, wlocation, wquantity, wmeasurementType, wlevel, wwidth, wheight) {
    cy.get(this.name).type(wname);
    cy.get(this.location).select(wlocation);
    cy.get(this.quantity).clear().type(wquantity);
    cy.get(this.level).select(wlevel);
    cy.get(this.width).type(wwidth);
    cy.get(this.height).type(wheight);
  }

  windowSave() {
    cy.get(this.windowsave).click();
  }

  windowUi() {}
  saveMeasurement() {
    cy.get(this.saveButton).click();
    cy.contains('Saved measurement successfully');
  }

  areavalue() {
    cy.get(
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div.mb-3 > div > div > div.col-md-7 > div > button:nth-child(3)'
    ).click();

    cy.get(this.area).should('have.value', '220.5');
  }

  importFile() {
    cy.get(this.importButton).click();
    cy.fixture('measurmentvalues.xml').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: 'measurmentvalues.xml',
        mimeType: 'application/xml'
      });
      cy.get(this.spinner, { timeout: 60000 }).should('not.exist');
    });
  }

  verifyWindowsValue() {
    cy.contains('Windows').click();

    cy.get('tbody > :nth-child(1) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('16.25 sqft');
      });

    cy.get('tbody > :nth-child(2) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('45.5 sqft');
      });

    cy.get('tbody > :nth-child(3) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('38.95 sqft');
      });

    cy.get('tbody > :nth-child(4) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('27.5 sqft');
      });

    cy.get('tbody > :nth-child(5) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('10 sqft');
      });

    cy.get('tbody > :nth-child(6) > :nth-child(8)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('15 sqft');
      });
  }

  verifyRoofingValue() {
    cy.contains('Roofing').click();

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(1) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(2) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(3) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(4) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(5) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });

    cy.get(
      ':nth-child(2) > .card > .collapse > .card-body > .row > :nth-child(1) > .table > tbody > :nth-child(6) > :nth-child(2)'
    )
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 sqft');
      });
  }

  verifySidingValue() {
    cy.contains('Siding').click();

    cy.get(':nth-child(1) > .table > tbody > :nth-child(1) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('3367.97 sqft');
      });

    cy.get(':nth-child(1) > .table > tbody > :nth-child(2) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('3536.37 sqft');
      });

    cy.get(':nth-child(1) > .table > tbody > :nth-child(3) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('3704.77 sqft');
      });

    cy.get(':nth-child(1) > .table > tbody > :nth-child(4) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('3873.17 sqft');
      });

    cy.get(':nth-child(1) > .table > tbody > :nth-child(5) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('3974.2 sqft');
      });

    cy.get(':nth-child(1) > .table > tbody > :nth-child(6) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('10 ea');
      });
    cy.get(':nth-child(2) > .table > tbody > :nth-child(1) > :nth-child(2)')
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('0 ea');
      });
  }

  clickOnTools() {
    cy.get(this.tools).click();
  }

  clickOnFencingTool() {
    cy.contains(this.fencingTool).click();
  }

  exportFenceDrawingButtonDisabled() {
    cy.get(this.exportFenceDrawing).should('be.disabled');
  }

  clickDraw() {
    cy.get("a[title='Draw a Terminal Post Fence']").click();
  }

  drawFence() {
    cy.get(this.map).click(150, 200);
    cy.get(this.map).click(200, 250);
    cy.get(this.map).click(250, 300);
    cy.get(this.map).click(300, 350);
  }

  finishDraw() {
    cy.get(this.finsh).click();
  }

  clickSave() {
    cy.contains('Save').click();
  }

  exportFenceDrawingButtonEnabled() {
    cy.get(this.exportFenceDrawing).should('be.enabled');
  }
}

export default Measurement;
