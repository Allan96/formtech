const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Chat = require('../models/Chat');
const Users = require('../models/Users');
const Respostas = require('../models/Respostas');

const connection = new Sequelize(dbConfig);

Chat.init(connection);
Users.init(connection);
Respostas.init(connection);


module.exports = connection;