/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var authCheck = require("./mid/authCheck");
var routes = require("./Lib/index");
var app = express();
app.set("views", __dirname + "/Tpl");
app.engine('html', require('ejs').renderFile);
app.set("name", "Admin");
var morgan = require('morgan');
app.use(morgan('tiny'));
app.use(Mid("resReturn"));
//do yourself ...
app.use(authCheck());
app.use(function (req, res, next) {
    res.locals.title = "Admin";
    next();
});
app.use("/", routes);
module.exports = app;