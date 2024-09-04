import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));
app.use(express.static('src/js/'));
app.use(express.static('src/css/'));
app.use(express.static('Assets/'));
app.use(express.static('Assets/gambar/'));

app.get('/10', (req, res) => {
  res.sendFile(__dirname + '/public/indexP10.html');
console.log(req.rawHeaders);
});
app.get('/9', (req, res) => {
  res.sendFile(__dirname + '/public/indexP9.html');
console.log(req.rawHeaders);
});
app.get('/8', (req, res) => {
  res.sendFile(__dirname + '/public/indexP8.html');
console.log(req.rawHeaders);
});
app.get('/7', (req, res) => {
  res.sendFile(__dirname + '/public/indexP7.html');
console.log(req.rawHeaders);
});
app.get('/6', (req, res) => {
  res.sendFile(__dirname + '/public/indexP6.html');
console.log(req.rawHeaders);
});
app.get('/5', (req, res) => {
  res.sendFile(__dirname + '/public/indexP5.html');
console.log(req.rawHeaders);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/indexP1234.html');
console.log(req.rawHeaders);
});

app.listen(port, () => {
  console.log(`port berjalan pada ${port}`);
});