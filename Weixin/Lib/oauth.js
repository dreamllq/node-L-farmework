/**
 * Created by lvlq on 16/7/31.
 */
var express = require("express");
var router = express.Router();
var base64 = Util("Func.base64");
var oauth = Util("wx.oAuth");
var querystring = require("querystring");


router.get("/info", function (req, res) {
    var url = req.href;
    var scope = "snsapi_userinfo";

    if (!req.query.code) {
        var redirecturl = oauth.getAuthorizeURL(url, "", scope);
        res.redirect(redirecturl);
        return;
    }
    oauth.getUserByCode(req.query.code, function (err, result) {
        if (!!err) {
            return res.send("系统错误,请联系管理员~~~");
        }

        var cb_url = base64.decode(req.query.url);
        result.oauth = 1;
        var query = querystring.stringify(result);
        cb_url = cb_url + (cb_url.indexOf('?') > -1 ? "&" : "?") + query;
        res.redirect(cb_url);
    });
});


router.get("/base", function (req, res) {
    var url = req.href;
    var scope = "snsapi_base";

    if (!req.query.code) {
        var redirecturl = oauth.getAuthorizeURL(url, "", scope);
        res.redirect(redirecturl);
        return;
    }
    oauth.getAccessToken(req.query.code, function (err, result) {
        if (!!err) {
            return res.send("系统错误,请联系管理员~~~");
        }

        var cb_url = base64.decode(req.query.url);
        var data = {
            openid: result.data.openid,
            oauth: 1
        };
        var query = querystring.stringify(data);
        cb_url = cb_url + (cb_url.indexOf('?') > -1 ? "&" : "?") + query;
        res.redirect(cb_url);
    });
});

module.exports = router;