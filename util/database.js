const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'sachinVS0406', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;