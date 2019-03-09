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
        let review = faker.lorem.sentence();
        let prodId = Math.ceil(Math.random() * 1e7);
        let userId = Math.ceil(Math.random() * 1e7);

        let percent = (id / 8e7) * 100;
        if (Number.isInteger(percent)) console.log(`${percent}% complete`)
        let data = `${id},${rating},${notHelpfulCount},${helpfulCount},${date},${review},${prodId},${userId}`;

        this.push(data + '\n');

        if (id === 8e7) { 
            this.push(null);
        }
    }
});

inStream.pipe(reviewFile);




