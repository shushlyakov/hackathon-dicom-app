const fs = require('fs');
const path = require('path');
const multer = require('multer');

const upload = multer({ dest: 'temp/uploads/' });

const express = require('express');
// const { parseFileAsync } = require('./server/dicom-parser');
let nextId = 0;
const app = express();
const database = {
  studies: [],
};

app.use(express.static('static'));
app.use('/node_modules', express.static('node_modules'));

app.post('/upload', upload.array('files'), (req, res) => {
  res.send(JSON.stringify(req.files[0]));
});

app.use(express.json());

app.get('/study/list', (req, res) => {
  res.send(JSON.stringify(database.studies));
});

app.get('/study/get', (req, res) => {
  res.send(JSON.stringify(database.studies.find(i => i.id === +req.query.id)));
});


app.get('/study/getFile', (req, res) => {
  res.sendFile(path.join(__dirname, req.query.path));
});


app.post('/study/add', (req, res) => {
  req.body.id = ++nextId;
  database.studies.push(req.body);
  res.sendStatus(200);
});

app.listen(8082, () => {
  console.log('Example app listening on port 8082!');
});
