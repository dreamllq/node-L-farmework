/**
 * Created by lvlq on 16/7/31.
 */

var base64 = Util("Func.base64");
module.exports = function (req, res, next) {
    var url = req.href;
    if (req.session.wx_user && req.session.wx_user.oauth) {
        next();
    } else if (req.query.oauth) {
        next();
    } else {
        var redirect = "http://" + C.wx_oauth_host + "/weixin/oauth/info?url=" + base64.encode(url);
        return res.redirect(redirect);
    }
};