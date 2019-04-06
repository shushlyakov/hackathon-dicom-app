const fs = require('fs');
const path = require('path');
const multer = require('multer');

const upload = multer({ dest: 'temp/uploads/' });

const express = require('express');
const { parseFileAsync } = require('./lib/dicom-parser');

const app = express();

app.use(express.static('static'));
app.use('/node_modules', express.static('node_modules'));

app.post('/upload', upload.array('files'), (req, res) => {
  console.log(req.files[0]);
  res.send(JSON.stringify(req.files[0]));
});

app.get('/api/parse', (req, res) => {
  parseFileAsync(path.join(__dirname, 'data/01_1/IM000000'));
  res.send('Hello World!');
});

app.listen(8082, () => {
  console.log('Example app listening on port 8082!');
});
