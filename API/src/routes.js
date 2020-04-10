const express = require('express');
const jwt = require('./jwt/index');
const ChatController = require('./controllers/ChatController');
const UsersController = require('./controllers/UsersController');
const ListChatController = require('./controllers/ListChatController');


const routes = express.Router();

//CHAT
routes.get('/view/chat', ChatController.view);
routes.get('/chat', jwt.verifyJWT, ChatController.index);
routes.post('/chat', jwt.verifyJWT, ChatController.create);
routes.get('/list', jwt.verifyJWT, ListChatController.index);

//USERS
routes.get('/users', jwt.verifyJWT, UsersController.index);
routes.post('/users', jwt.verifyJWT, UsersController.create);
routes.post('/login', UsersController.login);


module.exports = routes;