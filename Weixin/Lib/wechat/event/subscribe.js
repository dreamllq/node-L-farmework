/**
 * 关注事件(扫描带参数的二维码)
 * Created by lvlq on 16/7/30.
 */
var Q = require("q");
module.exports = function (message) {
    // { ToUserName: 'gh_5ef7080ad695',
    //     FromUserName: 'ovc9ft3YzggWHq7yJtfbMpD8nBVA',
    //    CreateTime: '1469847499',
    //    MsgType: 'event',
    //    Event: 'subscribe',
    //    EventKey: 'qrscene_xxx'
    //    Ticket:''}

    var defer = Q.defer();

    Models.weixin_user.save(message.FromUserName).then(function (data) {
        defer.resolve(JSON.stringify(data));
    }).catch(function () {
        defer.reject();
    });

    return defer.promise;
};
