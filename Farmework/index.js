global.Config = function () {
    return require(__dirname + "/Config/common.js")
};

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

global.Mid = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/mid/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};