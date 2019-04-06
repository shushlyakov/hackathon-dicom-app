const express = require('express');
const dicomParser = require('./lib/dicom-parser');

const app = express();

app.use(express.static('static'));

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


app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
