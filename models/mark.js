const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const mark = sequelize.define('mark', {
    CIF: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    markName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = mark;