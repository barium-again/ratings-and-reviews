var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const getReviews = (req, res) => {
    let { id } = req.params;
    MongoClient.connect(url, function (err, db) {
        if (err) {
            res.status(404).json('connect error', err);
        }
        var dbo = db.db("sephoraReviews");
        var query = { id: Number(id) };
        dbo.collection("reviewsMil").find(query).toArray(function (err, result) {
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

const postReview = (req, res) => {
    let { id, productName, fiveStarReviews, fourStarReviews, threeStarReviews,  twoStarReviews, oneStarReviews } = req.body
    MongoClient.connect(url, function (err, db) {
        if (err) res.status(404).json(err);
        var dbo = db.db("sephoraReviews");
        var myobj = { id, productName, fiveStarReviews, fourStarReviews, threeStarReviews,  twoStarReviews, oneStarReviews};
        dbo.collection("customers").insertOne(myobj, function (err, result) {
            if (err) res.status(404).json(err);
            res.status(201).json('Product added');
            // console.log("1 document inserted");
            db.close();
        });
    });
}


module.exports = { getReviews, postReview }
