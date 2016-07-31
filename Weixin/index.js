var express = require("express");
var app = express();
var morgan = require('morgan');

app.set("views", __dirname + "/Tpl");
app.set("name", "Weixin");
app.use(morgan('tiny'));
//do yourself ...

// require("./Lib")(app);
app.use("/", require("./Lib"));

module.exports = app;