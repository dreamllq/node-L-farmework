/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var compression = require('compression');
var app = express();
app.use(compression());
app.use("/", express.static(__dirname));
app.use("/", function (req, res) {
    res.send("404");
});

module.exports = app;