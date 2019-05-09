const faker = require('faker');
const fs = require('fs');
const { Readable } = require('stream');
const userFile = fs.createWriteStream('./userdata.csv');

const eyeColorArr = ['Blue', 'Brown', 'Green', 'Gray', 'Hazel'];

const hairColorArr = ['Blonde', 'Brunette', 'Auburn', 'Black', 'Red', 'Gray'];

const skinToneArr = ['Porcelain', 'Fair', 'Light', 'Medium', 'Tan', 'Olive', 'Deep', 'Dark', 'Ebony'];

const skinTypeArr = ['Normal', 'Combination', 'Dry', 'Oily'];

const ageRangeArr = ['13-17', '18-24', '25-34', '35-44', '45-54', 'Over 54'];

const skinConcernsArr = ['Acne', 'Aging', 'Blackheads', 'Calluses', 'Cellulite', 'Cuticles', 'Dark Circles',
    'Dullness', 'Redness', 'Sensitivity', 'Stretch Marks', 'Sun Damage', 'Uneven Skin Tones'];

let id = 0;
const randomizeArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const inStream = new Readable({
    read() {
        id++;
        let username = faker.name.firstName(); 
        let eyeColor = randomizeArr(eyeColorArr);
        let hairColor = randomizeArr(hairColorArr);
        let skinTone = randomizeArr(skinToneArr);
        let skinType = randomizeArr(skinTypeArr);
        let ageRange = randomizeArr(ageRangeArr);
        let skinConcerns = randomizeArr(skinConcernsArr);
        
        if (id % 10000 === 0) console.log('adding', id)
        // console.log(id)
        let data = `${id},${username},${eyeColor},${hairColor},${skinTone},${skinType},${ageRange},${skinConcerns}`;

        this.push(data + '\n');

        if (id === 1e7) {
            this.push(null);
        }
    }
});

inStream.pipe(userFile);




