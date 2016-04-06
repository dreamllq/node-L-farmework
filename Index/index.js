/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var wxshare = require("./mid/wxshare");
var uacheck = require("./mid/uacheck");
var routes = require("./Lib/index");
var morgan = require('morgan');

var app = express();
app.set("views", __dirname + "/Tpl");
app.engine('html', require('ejs').renderFile);
app.set("name", "Index");
app.use(morgan('tiny'));
//do yourself ...
app.use(uacheck);
app.use("/", routes);

module.exports = app;