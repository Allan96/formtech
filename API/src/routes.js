const express = require('express');


const ChatController = require('./controllers/ChatController');

const routes = express.Router();

routes.get('/chat', ChatController.index);
routes.post('/chat', ChatController.create);

module.exports = routes;