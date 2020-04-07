const express = require('express');


const ChatController = require('./controllers/ChatController');
const UsersController = require('./controllers/UsersController.js');
const ListChatController = require('./controllers/ListChatController.js');

const routes = express.Router();

//CHAT
routes.get('/chat', ChatController.index);
routes.post('/chat', ChatController.create);
routes.get('/list', ListChatController.index);

//USERS
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.post('/login', UsersController.login);


module.exports = routes;