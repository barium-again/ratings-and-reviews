const redis = require('redis');
const client = redis.createClient('6379', '18.216.200.155');
// const Pool = require('pg').Pool;
const {user, password, host, database, port} = require('../config.js')
// const pool = new Pool({
//     user,
//     password,
//     host,
//     database, 
//     port
// });

client.on('connect', ()=> {
    console.log('connected to Redis')
})
client.on('error', err => {
    console.log('CONNECTION ERROR', err);
    return  err;
})

const initializationOptions  = {
    error(err, e)  {
        if (e.cn) console.log('connection error', error.message);
        if (e.query) {
            console.log('query wahala', e.query);
            if (e.params)  console.log('query error', e.params)
        }
        if (e.ctx)  console.log('transaction error', e.ctx)
    }
}

const pgp = require('pg-promise')(initializationOptions);
const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
const db = pgp(connectionString);

db.connect()
    .then(obj => {
        console.log('connection success');
        obj.done()
    })
    .catch(err => {
        console.log('error connecting', err)
    })

const getReviews = (req,  res) => {
    const id = parseInt(req.params.id);
    client.get(id, (err, result) => {
        if (result) {
            res.send({"review data": JSON.parse(result), "source": "redis-cache"});
        } else {
            db.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid INNER JOIN users u ON u.id = r.userid', id)
            .then(data => {
                client.setex(id, 60, JSON.stringify(data));
                return  res.status(200).json(data)
            })
            .catch(err => {
                return res.status(501).json(err)
            })
        }
    })
}

// const headers = {
//     'access-control-allow-origin': '*',
//     'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     'access-control-allow-headers': 'content-type, accept',
//     'access-control-max-age': 10, // Seconds.
//     'Content-Type': 'application/json'
// };

// const getReviews = (req, res) => {
//     // let index = req.url.indexOf('s/');
//     // let id = req.url.substr(index+2);
//     const id = parseInt(req.params.id)
//     // let id = Math.ceil(Math.random() * 1e7)
//     pool.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid INNER JOIN users u ON u.id = r.userid', [id], (err, results) => {
//         if (err) {
//             res.status(404).send(err)
//         } else {
//             res.status(200).json(results.rows)
//         }
//     })
// }

const getReviewProd =  (req,res) => {
    const id = parseInt(req.params.id)
    // let id = Math.ceil(Math.random() * 1e7)
    pool.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid', [id], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const getProduct = (req, res) => {
    let index = req.url.indexOf('t/');
    let id = req.url.substr(index+2);
    // let id = Math.ceil(Math.random() * 1e7)
    console.log('product id', id)
    pool.query('SELECT * FROM products where id = $1', [id], (err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).json(results.rows)
        }
    })
}

// const postReview = (req, res) => {
//     let string = '';
//     req.on('data', (chunk) => {
//         string += chunk;
//     })
//     req.on('end', () => {
//         let result = JSON.parse(string)
//         const { id, rating, notHelpful, helpful, date, review, prodId, userId } = result;
//         pool.query('INSERT INTO reviews (id, rating, notHelpful, helpful, date, review, prodId, userId) VALUES ($1, $2, $3,  $4, $5, $6, $7, $8)', [id, rating, notHelpful, helpful, date, review, prodId, userId], (err, results) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end(JSON.stringify(err))
//             } else {
//                 res.writeHead(201, headers);
//                 res.end('posted')
//             }
//         })
//     })

// }

// const updateReview = (req, res) => {
//     let index = req.url.indexOf('s/');
//     let id = req.url.substr(index+2)
//     let string = '';
//     req.on('data', (chunk) => {
//         string += chunk;
//     })
//     req.on('end', () => {
//         let result = JSON.parse(string)
//         const { rating, review } = result;
//         pool.query('UPDATE reviews SET rating = $1, review = $2 WHERE id = $3', [rating, review, id], (err, result) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end(err)
//             } else {
//                 res.writeHead(201, headers);
//                 res.end(id, 'updated')
//             }
//         })
//     })
// }

// const deleteReview = (req, res) => {
//     // const id = parseInt(req.params.id);
//     let index = req.url.indexOf('s/');
//     let id = req.url.substr(index+2)
//     pool.query('DELETE FROM reviews WHERE id = $1', [id], (err, result) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(err)
//         } else {
//             res.writeHead(200, headers);
//             res.end('deleted')
//         }
//     })
// }

module.exports = {
    getReviews,
    getProduct,
    getReviewProd
    // postReview,
    // updateReview,
    // deleteReview
}
