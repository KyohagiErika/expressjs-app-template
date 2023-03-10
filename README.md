# expressjs-app-template
1. Set up Git & NPM
```
# git init
npm init
```
2. Install `express` & `express-handlebars`
```
npm i express express-handlebars
```
3. Set up directory structure
```
# root dir
src
  |
  controllers
    |
    index.controller.js
  routes
    |
    index.route.js
  views
    |
    layouts
      |
      main.handlebars
    partials
    index.handlebars
  main.js
```
4. Initialization
In `main.js`, write:
```
// Import the express module
const express = require('express');

// Import the handlebars module
const handlebars = require('express-handlebars');

// Import index router
const IndexRouter = require('./routes/index.route');

// Create a new express application instance
const app = express();

// Set handlebars as the view engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Set main route for the application
app.use(IndexRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```
In `index.controller.js`:
```
const { Request, Response, NextFunction } = require('express');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function index(req, res, next) {
    return res.render('index');
}

exports.index = index;
```
In `index.route.js`:
```
const { Router } = require('express');
const IndexController = require('../controllers/index.controller');

const IndexRoute = Router();
IndexRoute.get('/', IndexController.index);

module.exports = IndexRoute;
```
5. Set start script
In `package.json`, set the `start` script:
```
"scripts": {
    ...,
    "start": "node src/main.js"
},
```
6. Start the app
```
npm run start
```