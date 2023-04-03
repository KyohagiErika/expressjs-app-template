// Import the express module
const express = require('express');

// Import the handlebars module
const handlebars = require('express-handlebars');

// Import index router
const IndexRouter = require('./routes/index.route');
const getConnection = require('./database/sql');

// Create a new express application instance
const app = express();

// Set handlebars as the view engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Set main route for the application
app.use(IndexRouter);

// Set static folder
app.use('/assets', express.static(__dirname + '/../assets'));

(async () => {
    const pool = await getConnection();
    if (pool) {
        console.log('Connected to database');
        pool.close();

        // Start the server
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } else {
        console.log('Failed to connect to database');
    }
})()
