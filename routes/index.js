const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomePerson);
routes.get('/test', myController.test);

module.exports = routes;