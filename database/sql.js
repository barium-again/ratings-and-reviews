const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'taylorbantle',
    host: 'localhost',
    database: 'reviews',
    port: 5432
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
    let id = req.url.substr(index+2)
    console.log('id', id)
    // const id = Math.ceil(Math.random() * 1e7); //10
    pool.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid INNER JOIN users u ON u.id = r.userid', [id], (err, results) => {
        if (err) {
            res.writeHead(404, headers);
            res.end(err)
            // res.status(404).send(err)
        } else {
            res.writeHead(200, headers);
            res.end(JSON.stringify(results.rows))
            // res.status(200).json(results.rows)
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
                res.end(err)
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
            // res.status(200).send(`Modified review with ID ${id}`)
        })
    })
    // const id = parseInt(req.params.id);
    // const { rating, review } = req.body;
    
}

const deleteReview = (req, res) => {
    // const id = parseInt(req.params.id);
    let index = req.url.indexOf('s/');
    let id = req.url.substr(index+2)
    pool.query('DELETE FROM reviews WHERE id = $1', [id], (err, result) => {
        if (err) {
            // res.status(404).send(err)
            res.writeHead(404);
            res.end(err)
        } else {
            res.writeHead(200, headers);
            res.end('deleted')
        }
        // res.status(200).send('Review successfully deleted')
    })
}

module.exports = {
    getReviews,
    postReview,
    updateReview,
    deleteReview
}
