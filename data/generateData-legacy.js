const faker = require('faker');
const fs = require('fs');
const { Readable } = require('stream');
const file = fs.createWriteStream('./data.json');

// const { Review, Product } = require('../database')

const eyeColorArr = ['Blue', 'Brown', 'Green', 'Gray', 'Hazel'];

const hairColorArr = ['Blonde', 'Brunette', 'Auburn', 'Black', 'Red', 'Gray'];

const skinToneArr = ['Porcelain', 'Fair', 'Light', 'Medium', 'Tan', 'Olive', 'Deep', 'Dark', 'Ebony'];

const skinTypeArr = ['Normal', 'Combination', 'Dry', 'Oily'];

const ageRangeArr = ['13-17', '18-24', '25-34', '35-44', '45-54', 'Over 54'];

const skinConcernsArr = ['Acne', 'Aging', 'Blackheads', 'Calluses', 'Cellulite', 'Cuticles', 'Dark Circles',
    'Dullness', 'Redness', 'Sensitivity', 'Stretch Marks', 'Sun Damage', 'Uneven Skin Tones']

let id = 0;
// let length = 1e7;
const randomizeArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

let current = 0;

const inStream = new Readable({

    read() {
        // for (var j = 0; j < length; j++) {
            id++;
            let productName = faker.lorem.words();
            let fiveStarReviews = [];
            let fourStarReviews = [];
            let threeStarReviews = [];
            let twoStarReviews = [];
            let oneStarReviews = [];

            let loopLength = Math.ceil(Math.random() * 3);
            for (let i = 0; i < loopLength; i++) {
                let reviewObj = {};
                reviewObj.username = faker.name.firstName();
                reviewObj.ratingsNumber = 5
                reviewObj.eyeColor = randomizeArr(eyeColorArr);
                reviewObj.hairColor = randomizeArr(hairColorArr);
                reviewObj.skinTone = randomizeArr(skinToneArr);
                reviewObj.skinType = randomizeArr(skinTypeArr);
                reviewObj.ageRange = randomizeArr(ageRangeArr);
                reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
                reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
                reviewObj.review = faker.lorem.paragraph();

                fiveStarReviews.push(reviewObj);

            }

            for (let i = 0; i < loopLength; i++) {
                let reviewObj = {};
                reviewObj.username = faker.name.firstName();
                reviewObj.ratingsNumber = 4
                reviewObj.eyeColor = randomizeArr(eyeColorArr);
                reviewObj.hairColor = randomizeArr(hairColorArr);
                reviewObj.skinTone = randomizeArr(skinToneArr);
                reviewObj.skinType = randomizeArr(skinTypeArr);
                reviewObj.ageRange = randomizeArr(ageRangeArr);
                reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
                reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
                reviewObj.review = faker.lorem.paragraph();

                fourStarReviews.push(reviewObj);
            }

            for (let i = 0; i < loopLength; i++) {
                let reviewObj = {};
                reviewObj.username = faker.name.firstName();
                reviewObj.ratingsNumber = 3
                reviewObj.eyeColor = randomizeArr(eyeColorArr);
                reviewObj.hairColor = randomizeArr(hairColorArr);
                reviewObj.skinTone = randomizeArr(skinToneArr);
                reviewObj.skinType = randomizeArr(skinTypeArr);
                reviewObj.ageRange = randomizeArr(ageRangeArr);
                reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
                reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
                reviewObj.review = faker.lorem.paragraph();

                threeStarReviews.push(reviewObj);

            }

            loopLength = Math.ceil(Math.random() * 2);
            for (let i = 0; i < loopLength; i++) {
                let reviewObj = {};
                reviewObj.username = faker.name.firstName();
                reviewObj.ratingsNumber = 2
                reviewObj.eyeColor = randomizeArr(eyeColorArr);
                reviewObj.hairColor = randomizeArr(hairColorArr);
                reviewObj.skinTone = randomizeArr(skinToneArr);
                reviewObj.skinType = randomizeArr(skinTypeArr);
                reviewObj.ageRange = randomizeArr(ageRangeArr);
                reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
                reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
                reviewObj.review = faker.lorem.paragraph();

                twoStarReviews.push(reviewObj);
            }

            for (let i = 0; i < loopLength; i++) {
                let reviewObj = {};
                reviewObj.username = faker.name.firstName();
                reviewObj.ratingsNumber = 1;
                reviewObj.eyeColor = randomizeArr(eyeColorArr);
                reviewObj.hairColor = randomizeArr(hairColorArr);
                reviewObj.skinTone = randomizeArr(skinToneArr);
                reviewObj.skinType = randomizeArr(skinTypeArr);
                reviewObj.ageRange = randomizeArr(ageRangeArr);
                reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
                reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
                reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
                reviewObj.review = faker.lorem.paragraph();

                oneStarReviews.push(reviewObj);

            }
            if (current % 10000 === 0) console.log('adding', current)
            // console.log('adding', j);
            let obj = JSON.stringify({ id, productName, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews });

            if (current === 0) {
                this.push('[' + obj + ',');
                current++;
            } else if (current === 1e7 - 1) {
                this.push(obj + ']');
                current++;
            } else if (current) {
                this.push(obj + ',');
                current++;
            }
            
        // }
        if (current === 1e7) {
            this.push(null);
        }
    }
});

inStream.pipe(file)

// const generateData = () => {
    //   for(var j = 0; j < length; j++) {
    //       id++;
    //       let productName = faker.lorem.words();
    //       let fiveStarReviews =[];
    //       let fourStarReviews =[];
    //       let threeStarReviews =[];
    //       let twoStarReviews =[];
    //       let oneStarReviews =[];

    //       let loopLength = Math.ceil(Math.random() * 3);
    //       for(let i = 0; i < loopLength; i++) {
    //           let reviewObj = {};
    //           reviewObj.username = faker.name.firstName();
    //           reviewObj.ratingsNumber = 5
    //           reviewObj.eyeColor = randomizeArr(eyeColorArr);
    //           reviewObj.hairColor = randomizeArr(hairColorArr);
    //           reviewObj.skinTone = randomizeArr(skinToneArr);
    //           reviewObj.skinType = randomizeArr(skinTypeArr);
    //           reviewObj.ageRange = randomizeArr(ageRangeArr);
    //           reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    //           reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    //           reviewObj.review = faker.lorem.paragraph();

    //           let reviewDoc = new Review(reviewObj);

    //           fiveStarReviews.push(reviewDoc);

    //       }

    //       for(let i = 0; i < loopLength; i++) {
    //           let reviewObj = {};
    //           reviewObj.username = faker.name.firstName();
    //           reviewObj.ratingsNumber = 4
    //           reviewObj.eyeColor = randomizeArr(eyeColorArr);
    //           reviewObj.hairColor = randomizeArr(hairColorArr);
    //           reviewObj.skinTone = randomizeArr(skinToneArr);
    //           reviewObj.skinType = randomizeArr(skinTypeArr);
    //           reviewObj.ageRange = randomizeArr(ageRangeArr);
    //           reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    //           reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    //           reviewObj.review = faker.lorem.paragraph();

    //           let reviewDoc = new Review(reviewObj);
    //           fourStarReviews.push(reviewDoc);
    //       }

    //       for(let i = 0; i < loopLength; i++) {
    //           let reviewObj = {};
    //           reviewObj.username = faker.name.firstName();
    //           reviewObj.ratingsNumber = 3
    //           reviewObj.eyeColor = randomizeArr(eyeColorArr);
    //           reviewObj.hairColor = randomizeArr(hairColorArr);
    //           reviewObj.skinTone = randomizeArr(skinToneArr);
    //           reviewObj.skinType = randomizeArr(skinTypeArr);
    //           reviewObj.ageRange = randomizeArr(ageRangeArr);
    //           reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    //           reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    //           reviewObj.review = faker.lorem.paragraph();

    //           let reviewDoc = new Review(reviewObj);

    //           threeStarReviews.push(reviewDoc);

    //       }

    //       loopLength = Math.ceil(Math.random() * 2);
    //       for(let i = 0; i < loopLength; i++) {
    //           let reviewObj = {};
    //           reviewObj.username = faker.name.firstName();
    //           reviewObj.ratingsNumber = 2
    //           reviewObj.eyeColor = randomizeArr(eyeColorArr);
    //           reviewObj.hairColor = randomizeArr(hairColorArr);
    //           reviewObj.skinTone = randomizeArr(skinToneArr);
    //           reviewObj.skinType = randomizeArr(skinTypeArr);
    //           reviewObj.ageRange = randomizeArr(ageRangeArr);
    //           reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    //           reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    //           reviewObj.review = faker.lorem.paragraph();

    //           let reviewDoc = new Review(reviewObj);

    //           twoStarReviews.push(reviewDoc);
    //       }

    //       for(let i = 0; i < loopLength; i++) {
    //           let reviewObj = {};
    //           reviewObj.username = faker.name.firstName();
    //           reviewObj.ratingsNumber = 1;
    //           reviewObj.eyeColor = randomizeArr(eyeColorArr);
    //           reviewObj.hairColor = randomizeArr(hairColorArr);
    //           reviewObj.skinTone = randomizeArr(skinToneArr);
    //           reviewObj.skinType = randomizeArr(skinTypeArr);
    //           reviewObj.ageRange = randomizeArr(ageRangeArr);
    //           reviewObj.skinConcerns = randomizeArr(skinConcernsArr);
    //           reviewObj.notHelpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.helpfulCount = Math.ceil(Math.random() * 10);
    //           reviewObj.date = faker.date.between('2017-01-01', '2019-02-06');
    //           reviewObj.review = faker.lorem.paragraph();

    //           let reviewDoc = new Review(reviewObj);

    //           oneStarReviews.push(reviewDoc);

    //       }
    //       if (j % 10 === 0) console.log('adding', j)
    //       let obj = JSON.stringify({id, productName, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews});

    //       if (j === 0) {
    //           file.write('[' + obj + ',');
    //       } else if (j === length-1) {
    //         file.write(obj + ']');
    //     } else {
    //         file.write(obj + ',');
    //       }

    //   }
    //   file.end();
// }

// generateData();

// module.exports = generateData





// for(let i = 0; i < 100; i++) {
//     var username = faker.name.firstName();
//     var ratingsCount = Math.floor(Math.random() * 4) + 1
//     var eyeColor = eyeColorArr[Math.floor(Math.random() * 4) + 0]
//     var hairColor = hairColorArr[Math.floor(Math.random() * 5) + 0]
//     var skinTone = skinToneArr[Math.floor(Math.random() * 8) + 0]
//     var skinType = skinTypeArr[Math.floor(Math.random() * 3) + 0]
//     var ageRange = ageRangeArr[Math.floor(Math.random() * 5) + 0]
//     var skinConcerns = skinConcernsArr[Math.floor(Math.random() * 12) + 0]
//     var notHelpfulCount = 0;
//     var helpfulCount = 0;
//     var date = faker.date.between('2017-01-01', '2019-02-06');
//     var review = faker.lorem.paragraph();

//     Review.create({username, ratings, eyeColor, hairColor, skinTone, skinType, ageRange,
//         skinConcerns, notHelpful, helpful, date, review
//     })
// }   

