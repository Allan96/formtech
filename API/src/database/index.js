const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Chat = require('../models/Chat');

const connection = new Sequelize(dbConfig);

Chat.init(connection);


module.exports = connection;