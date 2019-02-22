const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3000;
const {Review, Product} = require('../database')

const app = express();

app.use(parser.json())
app.use(parser.urlencoded({extended:true}))

const getRatings = (req, res) => {
    let rand = Math.floor(Math.random() * 100);
    Product.findOne().skip(rand)
      .then(results => {
          res.status(200).send(results)
      })
}
// const getRatings = (req, res) => {
//     let rand = Math.floor(Math.random() * 100);
//     Product.find({id:req.params.id})
//       .then(results => {
//           res.status(200).send(results)
//       })
// }

app.get('/ratings', getRatings)

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(PORT, () => {
    console.log('listening to port')
})

