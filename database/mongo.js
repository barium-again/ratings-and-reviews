var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const getReviews = (req, res) => {
    let {id} = req.params;
    MongoClient.connect(url, function(err, db) {
      if (err) {
        res.status(404).json('connect error', err);
      } 
      var dbo = db.db("sephoraReviews");
      var query = { id: Number(id) };
      dbo.collection("reviewsMil").find(query).toArray(function(err, result) {
        if (err) {
            res.status(404).json('find error', err)
        } else {
            // console.log('result', result);
            res.status(200).json(result)
        }
        db.close();
      });
    });
}

module.exports = { getReviews }
