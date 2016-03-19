/**
 * Created by lvlq on 16/1/14.
 */
var WechatAPI = require('wechat-api');
var config = Config();
var R = Util("R");
var urllib = require("urllib");
var api = new WechatAPI(config.wx_app_id, config.wx_app_secret, function (callback) {
    urllib.request('http://api.weixinzjit.com/api.php/wx/get_Token', {
        method: "GET"
    }, function (err, result) {
        console.log(JSON.parse(result.toString()));
        if (err) {
            return callback(err);
        }
        var token = {
            accessToken: JSON.parse(result.toString()).d,
            expireTime: (new Date().getTime()) + 6000 * 1000
        };
        callback(null, token);
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
    console.log("开始连接redis获取jstoken");
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