require('dotenv').config();
const express = require('express');
const path = require('path');
const catRouter = require('./routes/categories');
const itemsRouter = require('./routes/items');

const app = express();
const port = process.env.PORT || 8080;
const html = path.join(__dirname, '..', 'build', 'index.html');

app.use(express.json());

app.use(catRouter);
app.use(itemsRouter);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(html);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
