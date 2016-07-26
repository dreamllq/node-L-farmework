/**
 * Created by lvliqi on 2016/7/26.
 */

var redis = Util("R.RedisCache");
module.exports = function (req, res, next) {
    var client = redis();
    var key = req.weixin.MsgId;
    client.getAsync(key).then(function (res) {
        if (!res) {
            next();
            return client.setexAsync(key, 20, "1");
        } else {
            console.log(2);
        }
    }).done(function () {
        console.log(1);
        client.quit();
    });

};