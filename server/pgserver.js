const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3000;
const { getReviews, postReview } = require('../database/sql.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/reviews/:id', getReviews);
app.post('/reviews', postReview);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
