require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger  = require('morgan');
const mongoose = require('mongoose');
const Entry = require('./models/leaderboardModel.js');


const keys = require('./config/keys.js');
const InitiateMysqlServer = require('./config/sqlDB.js') // sql database
const InitiateMongoServer = require('./config/mongoDB.js');


// Database connection
InitiateMysqlServer() // SQL database connection
InitiateMongoServer(); // MongoDB database connection

const app = express()

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/leaderboardRoutes.js');
routes(app);

app.listen(keys.PORT, () => {
	console.log(`Server is running on PORT: ${keys.PORT}`)
});
