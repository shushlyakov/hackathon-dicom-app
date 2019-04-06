const fs = require('fs');
const dicomParser = require('dicom-parser');

function parseFileAsync(filePath) {
  const dicomFileAsBuffer = fs.readFileSync(filePath);

  try {
    const dataSet = dicomParser.parseDicom(dicomFileAsBuffer);
    console.log(dataSet);
  } catch (ex) {
    console.log(ex);
  }
}

module.exports = {
  parseFileAsync,
};
