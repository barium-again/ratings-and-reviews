require('newrelic');
const { getReviews, getReviewProd, /*postReview, updateReview, deleteReview,*/ getProduct } = require('../database/sql.js');
const PORT = 3000;
const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const responseTime = require('response-time');
// const Pool = require('pg').Pool;
// const {user, password, host, database, port} = require('../config.js')
// const pool = new Pool({
//     user,
//     password,
//     host,
//     database, 
//     port
// });

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// app.use(responseTime());

app.get('/reviews/:id', getReviews);
// app.get('/reviewpros/:id', getReviewProd);
// app.get('/product/:id', getProduct)
// app.post('/reviews', postReview);
// app.put('/reviews/:id', updateReview);
// app.delete('/reviews/:id', deleteReview);

app.get('/loaderio-2a1e31aee8540c560ce55f9074fbcbf0', (req, res) => {
    res.sendFile(path.join(__dirname, '../loaderio-2a1e31aee8540c560ce55f9074fbcbf0.txt'))
})

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});

// const http = require('http');
// // const handleRequest = require('./request-handler.js');
// const urlParser = require('url');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     const parts = urlParser.parse(req.url);
//     // console.log(parts.pathname)
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, '../client/dist/index.html'), (err, data) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.write("Not Found!", err);
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write(data)
//             }
//             res.end();
//         })
//     } 
//     else if (parts.pathname.includes('loaderio-2a1e31aee8540c560ce55f9074fbcbf0')) {
//             fs.readFile(path.join(__dirname, '../loaderio-2a1e31aee8540c560ce55f9074fbcbf0.txt'), (err, data) => {
//                 if (err) {
//                     res.writeHead(404);
//                     res.write("Not Found!", err);
//                 } else {
//                     res.writeHead(200, { 'Content-Type': 'text/plain' });
//                     res.write(data);
//                 }
//                 res.end()
            
//         })
//     }
//     // else if (req.url === '/bundle.js') {
//     //     fs.readFile(path.join(__dirname, '../client/dist/bundle.js'), (err, data) => {
//     //         if (err) {
//     //             res.writeHead(404);
//     //             res.write("Not Found!", err);
//     //         } else {
//     //             res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     //             res.write(data)
//     //         }
//     //         res.end()
            
//     //     })
//     // } 
//     else if (parts.pathname.includes('/reviews')) {
//         if (req.method === 'GET') {
//             getReviews(req, res);
//         } else if (req.method === 'POST') {
//             postReview(req, res);
//         } else if (req.method === 'PUT') {
//             updateReview(req, res);
//         } else if (req.method === 'DELETE') {
//             deleteReview(req, res)
//         } else if (request.method === 'OPTIONS') {
//             res.writeHead(200);
//             res.end();
//         }
//     } else if (parts.pathname.includes('/product')){
//         if (req.method === 'GET') {
//             getProduct(req, res);
//         }
//     } else {
//         res.writeHead(404);
//         res.end(JSON.stringify('Not Found!!'))
//     }
// });

// server.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));