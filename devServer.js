var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var app = express();
var compiler = webpack(config);
var dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));


app.use("/", express.static(__dirname));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    quiet: true,
    poll: true
}));

app.use(require('webpack-hot-middleware')(compiler, {
    log: ()=> {
    }
}));


app.listen(6006, function (err) {
    if (err) {
        console.error(err);
    }
});

console.log("server start");
console.log('http://localhost:6001');
