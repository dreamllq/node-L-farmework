var express = require("express");
var app = express();

app.set("views", __dirname + "/Tpl");
app.set("name", "Weixin");
//do yourself ...

require("./Lib")(app);

module.exports = app;