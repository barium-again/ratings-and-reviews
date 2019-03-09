// const express = require('express');
// const parser = require('body-parser');
// const path = require('path');
// // const morgan = require('morgan');
// const PORT = 3000;
const { getReviews, postReview, updateReview, deleteReview } = require('../database/sql.js');

// const app = express();

// // app.use(morgan('dev'));
// app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));

// app.get('/reviews/:id', getReviews);
// app.post('/reviews', postReview);
// app.put('/reviews/:id', updateReview);
// app.delete('/reviews/:id', deleteReview);

// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.listen(PORT, () => {
//   console.log('listening to port', PORT);
// });

const http = require('http');
const fs = require('fs');
const urlParser = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parts = urlParser.parse(req.url);
    if (req.url === '/') {
        fs.readFile('/Users/taylorbantle/Documents/HRLA27/Senior/SEC/ratings-and-reviews/client/dist/index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("Not Found!", err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data)
            }
            res.end()
            
        })
    } else if (req.url === '/bundle.js') {
        fs.readFile('/Users/taylorbantle/Documents/HRLA27/Senior/SEC/ratings-and-reviews/client/dist/bundle.js', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("Not Found!", err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.write(data)
            }
            res.end()
            
        })
    } else if (parts.pathname.includes('/reviews')) {
        if (req.method === 'GET') {
            getReviews(req, res);
        } else if (req.method === 'POST') {
            postReview(req, res);
        } else if (req.method === 'PUT') {
            updateReview(req, res);
        } else if (req.method === 'DELETE') {
            deleteReview(req, res)
        } else if (request.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify('Not Found!!'))
    }
});

server.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));