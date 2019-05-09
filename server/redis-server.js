const PORT = 3000;
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const {user, password, host, database, port} = require('../config.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log('listening to port', PORT);
});

const redis = require('redis');
const client = redis.createClient('6379', '18.216.200.155');

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

app.get('/reviews/:id', (req,  res) => {
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
});
