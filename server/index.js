const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3003;
const { Review, Product } = require('../database');
const generateData = require('./generateData');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

Product.find().then(result => {
  if (result.length === 0) {
    generateData();
  }
});

const getRatings = (req, res) => {
  let { id } = req.params;
  Product.findOne({ id }).then(result => {
    res.status(200).json(result);
  });
};

app.get('/ratings/:id', getRatings);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port');
});
