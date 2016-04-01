/**
 * Created by lvlq on 16/3/19.
 */
module.exports = function (redirectUrl) {
    var callback = "http://scgbg.weixinzjit.com/index/setsession?next=" + redirectUrl;
    var oauthUrl = "http://api.weixinzjit.com/api.php/wx/oauth?callback=" + encodeURIComponent(callback);
    oauthUrl += "&type=userinfo";
    return oauthUrl;
};