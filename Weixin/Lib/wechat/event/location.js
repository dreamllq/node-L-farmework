/**
 * 地理信息上报
 * Created by lvlq on 16/7/30.
 */
var Q = require("q");
module.exports = function (message) {
    // { ToUserName: 'gh_5ef7080ad695',
    //    FromUserName: 'ovc9ft3YzggWHq7yJtfbMpD8nBVA',
    //    CreateTime: '1469847994',
    //    MsgType: 'event',
    //    Event: 'LOCATION',
    //    Latitude: '39.990253',
    //    Longitude: '116.425056',
    //    Precision: '65.000000' }


    var defer = Q.defer();

    return defer.promise;
};
