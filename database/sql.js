const Pool = require('pg').Pool;
const {user, password, host, database, port} = require('../config.js')
const pool = new Pool({
    user,
    password,
    host,
    database, 
    port
});

const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
    'Content-Type': 'application/json'
};

const getReviews = (req, res) => {
    let index = req.url.indexOf('s/');
    let id = req.url.substr(index+2);
    // let id = Math.ceil(Math.random() * 1e7)
    pool.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid INNER JOIN users u ON u.id = r.userid', [id], (err, results) => {
        if (err) {
            res.writeHead(404, headers);
            res.end(JSON.stringify(err))
        } else {
            res.writeHead(200, headers);
            res.end(JSON.stringify(results.rows))
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
            res.writeHead(404, headers);
            res.end(JSON.stringify(err))
        } else {
            res.writeHead(200, headers);
            res.end(JSON.stringify(results.rows))
        }
    })
}

const postReview = (req, res) => {
    let string = '';
    req.on('data', (chunk) => {
        string += chunk;
    })
    req.on('end', () => {
        let result = JSON.parse(string)
        const { id, rating, notHelpful, helpful, date, review, prodId, userId } = result;
        pool.query('INSERT INTO reviews (id, rating, notHelpful, helpful, date, review, prodId, userId) VALUES ($1, $2, $3,  $4, $5, $6, $7, $8)', [id, rating, notHelpful, helpful, date, review, prodId, userId], (err, results) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err))
            } else {
                res.writeHead(201, headers);
                res.end('posted')
            }
        })
    })

}

const updateReview = (req, res) => {
    let index = req.url.indexOf('s/');
    let id = req.url.substr(index+2)
    let string = '';
    req.on('data', (chunk) => {
        string += chunk;
    })
    req.on('end', () => {
        let result = JSON.parse(string)
        const { rating, review } = result;
        pool.query('UPDATE reviews SET rating = $1, review = $2 WHERE id = $3', [rating, review, id], (err, result) => {
            if (err) {
                res.writeHead(404);
                res.end(err)
            } else {
                res.writeHead(201, headers);
                res.end(id, 'updated')
            }
        })
    })
}

const deleteReview = (req, res) => {
    // const id = parseInt(req.params.id);
    let index = req.url.indexOf('s/');
    let id = req.url.substr(index+2)
    pool.query('DELETE FROM reviews WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.writeHead(404);
            res.end(err)
        } else {
            res.writeHead(200, headers);
            res.end('deleted')
        }
    })
}

module.exports = {
    getReviews,
    getProduct,
    postReview,
    updateReview,
    deleteReview
}
