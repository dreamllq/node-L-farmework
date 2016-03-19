/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var app = express();
app.set("views", __dirname + "/Tpl");
app.set("name", "Index");
require("../Farmework")(app);
//do yourself ...

require("./Lib")(app);

module.exports = app;