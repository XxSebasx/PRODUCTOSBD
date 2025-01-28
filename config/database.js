const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SHOP', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;