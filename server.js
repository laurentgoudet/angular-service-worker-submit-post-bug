const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  res.send(`Received username ${req.body.username}`);
  res.end()
})

app.get('/submit-form', (req, res) => {
  res.send(`Error: this endpoint only accept POST requests`);
  res.end()
})

app.get('/ngsw-worker.js', (req, res) => {
  res.sendFile(`${__dirname}/ngsw-worker.js`);
})

app.get('/ngsw.json', (req, res) => {
  res.sendFile(`${__dirname}/ngsw.json`);
})

app.get('/index.html', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
})

app.listen(port);
console.log('Server started! At http://localhost:' + port);
