const path = require('path');
const express = require('express');
const { parseFileAsync } = require('./lib/dicom-parser');

const app = express();

app.use(express.static('static'));
app.use('/node_modules', express.static('node_modules'));

app.use((req, res, next) => {
  const auth = { login: 'dev', password: 'def' };
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');

  if (!login || !password || login !== auth.login || password !== auth.password) {
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
    return;
  }
  next();
});


app.post('/upload', (req, res) => {
  console.log(req.files);
});


app.get('/api/parse', (req, res) => {
  parseFileAsync(path.join(__dirname, 'data/01_1/IM000000'));
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
