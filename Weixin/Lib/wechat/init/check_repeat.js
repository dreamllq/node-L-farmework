/**
 * Created by lvliqi on 2016/7/26.
 */

var redis = Util("R.RedisCache");
module.exports = function (req, res, next) {
    console.log(req.weixin);
    var client = redis();
    var key;
    if (req.weixin.MsgId) {
        key = req.weixin.MsgId;
    } else {
        key = req.weixin.FromUserName + "_" + req.weixin.CreateTime;
    }
    client.getAsync(key).then(function (res) {
        if (!res) {
            next();
            return client.setexAsync(key, 20, "1");
        }
    }).done(function () {
        client.quit();
    });
};