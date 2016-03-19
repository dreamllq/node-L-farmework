/**
 * Created by lvlq on 16/1/6.
 */

var port = process.env.NODE_PORT || 18080;
var express = require("express");
var app = express();


app.use("/index", require("./Index"));
app.use("/admin", require("./Admin"));
app.use("/weixin", require("./Weixin"));
app.use("/", require("./Public"));

console.log("监听端口:" + port);
app.listen(port);