/**
 * Created by lvlq on 15/8/20.
 */
var express = require("express");
var router = express.Router();
var querystring = require("querystring");
var oauth = Util("wx.oAuth");

/**
 * oauth 代理服务
 * callbackurl
 * scope {snsapi_userinfo | snsapi_base}
 */
router.get("/act", function (req, res) {
    var callbackurl = req.query.callbackurl;
    var scope = req.query.scope == "snsapi_userinfo" ? "snsapi_userinfo" : "snsapi_base";
    req.session.callbackurl = callbackurl;
    var redirectUrl;
    redirectUrl = req.protocol + "://" + req.hostname + req.baseUrl + "/index";
    var url = oauth.getAuthorizeURL(redirectUrl, "", scope);
    console.log(url);
    res.redirect(url);
});

/**
 * 获取用户信息
 */
router.post("/userinfo", function (req, res) {
    var openid = req.query.openid;
    oauth.getUser(openid, function (err, result) {
        if (!!err) {
            return res.json({errno: 1001, err: err});
        }

        res.json({errno: 0, userInfo: result});
    });
});

/**
 * 只获取用户openid
 */
router.get("/index", function (req, res) {
    var code = req.query.code;
    var callbackurl = req.session.callbackurl;
    var url = callbackurl.split("?")[0];
    var params_str = callbackurl.split("?")[1];
    var params_json = querystring.parse(params_str);


    oauth.getAccessToken(code, function (err, result) {
        if (!!err) {
            return res.send("系统错误,请联系管理员~~~");
        }
        params_json.openid = result.data.openid;
        params_str = querystring.stringify(params_json);
        url += '?';
        url += params_str;
        console.log(url);
        res.redirect(url);
    });
});

module.exports = router;