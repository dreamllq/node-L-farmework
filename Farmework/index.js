global.Config = function () {
    return require(__dirname + "/Config/common.js")
};

global.C = global.Config();

global.Util = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/Util/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};

global.M = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/Model/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};


// global.Models = function () {
//
// };
global.Mid = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/mid/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};
global.WX = {};

global.WX.api = (function () {
    if (C.wx_local) {
        return Util("wx.api");
    } else {
        return Util("wx.api_other");
    }
})();

global.WX.oauth = (function () {
    return Util('wx.oAuth');
})();

module.exports = {};