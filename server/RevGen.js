const faker = require('faker');
const fs = require('fs');
const { Readable } = require('stream');
const reviewFile = fs.createWriteStream('./reviewdataex.csv');

let id = 0;

const inStream = new Readable({

    read() {

        id++;

        let rating = Math.ceil(Math.random() * 5);
        let notHelpfulCount = Math.floor(Math.random() * 100);
        let helpfulCount = Math.floor(Math.random() * 100);
        let date = faker.date.between('2015-01-01', '2019-02-06');
        let review = faker.lorem.paragraph();
        let prodId = Math.ceil(Math.random() * 1e7);
        let userId = Math.ceil(Math.random() * 1e7);

        if (id % 10000 === 0) console.log('adding', id)
        // console.log(id)
        let data = `${id},${rating},${notHelpfulCount},${helpfulCount},${date},${review},${prodId},${userId}`;

        this.push(data + '\n');

        if (id === 100) {
            this.push(null);
        }
    }
});

inStream.pipe(reviewFile);




