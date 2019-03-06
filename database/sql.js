const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'taylorbantle',
    host: 'localhost',
    database: 'reviews',
    port: 5432
})

const getReviews = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM reviews r INNER JOIN products p ON p.id = $1 AND p.id = r.prodid INNER JOIN users u ON u.id = r.userid', [id], (err, results) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const postReview = (req, res) => {
    const { id, rating, notHelpful, helpful, date, review, prodId, userId } = req.body;
    pool.query('INSERT INTO reviews (id, rating, notHelpful, helpful, date, review, prodId, userId) VALUES ($1, $2, $3,  $4, $5, $6, $7, $8)', [id, rating, notHelpful, helpful, date, review, prodId, userId], (err, results) => {
        if (err) {
          console.log(err)
        }
        res.status(201).send(`User added with id ${JSON.stringify(results.insertId)}`)
    })
}

module.exports = {
    getReviews,
    postReview
}
