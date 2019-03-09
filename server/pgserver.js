const { getReviews, postReview, updateReview, deleteReview, getProduct } = require('../database/sql.js');
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
    } else if (parts.pathname.includes('/product')){
        if (req.method === 'GET') {
            getProduct(req, res);
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify('Not Found!!'))
    }
});

server.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));