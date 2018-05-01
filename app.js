// app.js
const express = require('express');

const app = express();

const EmailController = require('./EmailController');

const cors = require('cors');

const endpoint = process.env.ENDPOINT;

const corsOptions = {
  origin: endpoint,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use('/', cors(corsOptions), EmailController);

module.exports = app;
