/**
 * Created by lvlq on 15/8/20.
 */
var oauth = Util("wx.oAuth");

var getUrl = function (req, res) {
    var redirectUrl = req.body.redirectUrl || req.query.redirectUrl || "http://esteelauder.weixinzjit.com:5555";
    var state = req.body.state || req.query.state || "0"; //渠道吧
    var scope = req.body.scope || req.query.scope || "snsapi_base"; //snsapi_base OR snsapi_userinfo
    var url = oauth.getAuthorizeURL(redirectUrl, state, scope);
    res.json({url: url});
};

var getUrlForWeb = function (req, res) {
    var redirectUrl = req.body.redirectUrl || req.query.redirectUrl || "http://esteelauder.weixinzjit.com";
    var url = oauth.getAuthorizeURLForWebsite(redirectUrl);
    res.json({url: url});
};

var getOauth = function (req, res) {
    var code = req.body.code || req.query.code;

    oauth.getAccessToken(code, function (err, result) {
        if (!!err) {
            return res.json({success: false, err: err});
        }
        var accessToken = result.data.access_token;
        var openid = result.data.openid;
        res.cookie("uid", openid, {maxAge: 365 * 24 * 60 * 60 * 1000});
        console.log(openid);

        res.json({success: true, accessToken: accessToken, openid: openid});
    });
};

var getOauthUserInfo = function (req, res) {
    var openid = req.body.openid || req.query.openid;
    oauth.getUser(openid, function (err, result) {
        if (!!err) {
            return res.json({success: false, err: err});
        }
        var userInfo = result;

        res.json({success: true, userInfo: userInfo});
    });
};

module.exports = {
    getUrl: getUrl,
    getUrlForWeb: getUrlForWeb,
    getOauth: getOauth,
    getOauthUserInfo: getOauthUserInfo
};