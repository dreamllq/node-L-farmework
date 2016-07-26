/**
 * Created by lvliqi on 2016/7/26.
 */
var api = Util("wx.api");
module.exports = function (req, res, next) {
    api.getUser(req.weixin.FromUserName, function (err, result) {
        if (err) return console.log(err);
        console.log(result);
        req.wx_user = result;
        next();
    });
};