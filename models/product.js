const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const mark = require('./mark');

const product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    markName:{
        type: DataTypes.STRING,
        references: {
            model: 'mark',
            key: 'name'
        },
        allowNull: false
    }
});

product.belongsTo(mark, { foreignKey: 'markName' });
module.exports = product;