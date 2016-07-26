/**
 * Created by lvliqi on 2016/7/26.
 */
var api = Util("wx.api");
module.exports = function (req, res, next) {
    api.getUserAsync(req.weixin.FromUserName).then(function (user) {
        req.wx_user = user;
        next();
    }).catch(function (err) {
        console.error(err);
    });
    // api.getUser(req.weixin.FromUserName, function (err, result) {
    //     if (err) return console.log(err);
    //     req.wx_user = result;
    //     next();
    // });
};