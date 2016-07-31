/**
 * 取消关注事件
 * Created by lvlq on 16/7/30.
 */
var Q = require("q");

module.exports = function (message) {
    // { ToUserName: 'gh_5ef7080ad695',
    //     FromUserName: 'ovc9ft3YzggWHq7yJtfbMpD8nBVA',
    //    CreateTime: '1469847499',
    //    MsgType: 'event',
    //    Event: 'unsubscribe',
    //    EventKey: '' }


    var defer = Q.defer();

    return defer.promise;
};
