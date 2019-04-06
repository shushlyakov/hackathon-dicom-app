const fs = require('fs');
const dicomParser = require('dicom-parser');

function parseFileAsync(filePath) {
  const dicomFileAsBuffer = fs.readFileSync(filePath);

  try {
    const dataSet = dicomParser.parseDicom(dicomFileAsBuffer);
    var patientName = dataSet.string('x00100010');
    console.log('Patient Name = '+ patientName);


    console.log(dataSet);
  } catch (ex) {
    console.log(ex);
  }
}

module.exports = {
  parseFileAsync,
};
