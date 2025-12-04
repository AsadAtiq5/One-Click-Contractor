const fs = require('fs').promises;
const path = require('path');
const pdf = require('pdf-parse');

const readPdf = async (pathToPdf) => {
  try {
    const pdfPath = path.resolve(pathToPdf);
    const dataBuffer = await fs.readFile(pdfPath);
    const pdfData = await pdf(dataBuffer);
    return pdfData.text;
  } catch (error) {
    throw new Error(`Error reading PDF file: ${error.message}`);
  }
};

module.exports = { readPdf };
