/**
 * Created by lvlq on 16/11/17.
 */
var express = require("express");
var routes = require("./Lib");
var morgan = require('morgan');
var app = express();
app.set("name", "Service");
app.use(morgan('tiny'));
//do yourself ...
app.use("/", routes);
app.use("/", function (req, res) {
    res.send("404");
});

module.exports = app;