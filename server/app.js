const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const feedback = require('./routes/feedback');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use('/feedback',feedback);



module.exports = app
