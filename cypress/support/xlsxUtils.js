// xlsxUtils.js
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

function convertXlsxToJson(filePath) {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  const fileName = path.basename(filePath, '.xlsx');
  const jsonFilePath = `./cypress/fixtures/${fileName}.json`;
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  return null;
}

module.exports = {
  convertXlsxToJson
};
