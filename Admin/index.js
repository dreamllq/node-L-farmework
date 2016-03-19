/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var authCheck = require("./mid/authCheck");
var app = express();
app.set("views", __dirname + "/Tpl");
app.set("name", "Admin");
require("../Farmework")(app);
//do yourself ...
app.use(authCheck());
app.use(function (req, res, next) {
    res.locals.title = "Admin";
    next();
});

require("./Lib")(app);

module.exports = app;
var routes = require("./Lib");
routes(app);

module.exports = app;