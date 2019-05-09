const faker = require('faker');
const fs = require('fs');
const { Readable } = require('stream');
const productFile = fs.createWriteStream('./proddata.csv');
    
let id = 0;
// let current = 0;
const inStream = new Readable({
    read() {
        id++;
        let productName = faker.lorem.words();
        
        if (id % 10000 === 0) console.log('adding', id)
        let data = `${id},${productName}`;

        this.push(data + '\n');

        if (id === 1e7) {
            this.push(null);
        }
    }
});

inStream.pipe(productFile);




