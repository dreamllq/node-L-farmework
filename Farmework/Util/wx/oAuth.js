/**
 * Created by lvlq on 16/1/14.
 */
var OAuth = require('wechat-oauth');
var config = Config();
var R = Util("R");
var api = new OAuth(config.wx_app_id, config.wx_app_secret, function (openid, callback) {
    R(config.wx_name + ":" + openid + ":access_token").get()
        .then(function (token) {
            callback(null, token);
        })
        .catch(function (err) {
            callback(err);
        });
}, function (openid, token, callback) {
    R(config.wx_name + ":" + openid + ":access_token").set(token)
        .then(function () {
            callback(null);
        })
        .catch(function (err) {
            callback(err);
        });
});

module.exports = api;