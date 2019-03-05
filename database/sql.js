const Sequelize = require('sequelize');
const sequelize = new Sequelize('reviews', 'taylorbantle', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('successfully connected to postgres')
}).catch((err) => {
    console.log('sequelize error', err)
})