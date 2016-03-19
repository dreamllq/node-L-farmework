/**
 * Created by lvlq on 16/1/13.
 */
var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');
var cookieParser = require("cookie-parser");
var RedisStore = require('connect-redis')(session);
var compression = require('compression');
var resReturn = require("./mid/resReturn");
var util = require("util");
Config = function () {
    return require(__dirname + "/Config/common.js")
};
var config = Config();

Util = function (str) {
    var arr = str.split(".");
    var path = "/Util/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(__dirname + path);
};

M = function (str) {
    var arr = str.split(".");
    var path = "./Model/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};

module.exports = function (app) {
    var sessionLoading = function () {
        var sessionStore = null;
        if (config.session_store) {
            if (config.session_store_type == "redis") {
                sessionStore = new RedisStore({
                    host: config.session_store_host,
                    port: config.session_store_port,
                    ttl: config.session_store_ttl
                });
            }
        }
        app.use(session({
            secret: 'admin secret',
            store: sessionStore,
            resave: false,
            saveUninitialized: true
        }));
    };


    app.engine('html', require('ejs').renderFile);
    app.use(morgan('tiny'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    sessionLoading();
    app.use(resReturn());
};