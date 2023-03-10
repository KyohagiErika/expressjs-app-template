// Import Router from express
const { Router } = require('express');

// Import the index controller
const IndexController = require('../controllers/index.controller');
const UserRoute = require('./user.route');

// Create a new router
const IndexRoute = Router();

// Set the index route
IndexRoute.get('/', IndexController.index);
IndexRoute.get('/about', IndexController.about);

// Set the sub route (user)
IndexRoute.use('/users', UserRoute);

// Export the router
module.exports = IndexRoute;