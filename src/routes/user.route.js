const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const UserRoute = Router();

UserRoute.get('/', UserController.getUsers);

module.exports = UserRoute;