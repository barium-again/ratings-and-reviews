const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = 3003;
const { getReviews, postReview } = require('../database/mongo.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// const getRatings = (req, res) => {
//   let { id } = req.params;
//   Product.findOne({ id }).then(result => {
//     res.status(200).json(result);
//   });
// };

app.get('/ratings/:id', getReviews);
app.post('/ratings', postReview);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});
