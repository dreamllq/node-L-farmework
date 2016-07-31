/**
 * Created by lvlq on 16/7/31.
 */

var base64 = Util("Func.base64");
module.exports = function (req, res, next) {
    var url = req.href;
    if (!req.query.oauth) {
        var redirect = "http://weixin.xfoody.com/weixin/oauth/info?url=" + base64.encode(url);
        return res.redirect(redirect);
    }
    next();
};