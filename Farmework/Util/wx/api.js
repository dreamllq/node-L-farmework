/**
 * Created by lvlq on 16/1/14.
 */
var WechatAPI = require('wechat-api');
var config = Config();
var R = Util("R");
var urllib = require("urllib");
var bluebird = require("bluebird");
bluebird.promisifyAll(WechatAPI.prototype);

var api = new WechatAPI(config.wx_app_id, config.wx_app_secret, function (callback) {
    R(config.wx_name + ":access_token").get()
        .then(function (token) {
            callback(null, token);
        })
        .catch(function (err) {
            callback(err);
        });
}, function (token, callback) {
    R(config.wx_name + ":access_token").set(token)
        .then(function () {
            callback(null);
        })
        .catch(function (err) {
            callback(err);
        });
});

api.registerTicketHandle(function (type, callback) {
    R(config.wx_name + ":" + type + ":ticketToken").get()
        .then(function (token) {
            callback(null, token);
        })
        .catch(function (err) {
            callback(err);
        });
}, function (type, ticketToken, callback) {
    R(config.wx_name + ":" + type + ":ticketToken").set(ticketToken)
        .then(function () {
            callback(null);
        })
        .catch(function (err) {
            callback(err);
        });
});

module.exports = api;