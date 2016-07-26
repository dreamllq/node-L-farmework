var express = require("express");
var app = express();

app.set("views", __dirname + "/Tpl");
app.set("name", "Weixin");
//do yourself ...

// require("./Lib")(app);
app.use("/", require("./Lib"));

module.exports = app;