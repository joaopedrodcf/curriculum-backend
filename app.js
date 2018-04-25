// app.js
var express = require("express");
var app = express();

var EmailController = require("./EmailController");
app.use("/", EmailController);

module.exports = app;
