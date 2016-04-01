/**
 * Created by lvlq on 16/3/20.
 */
Config = function () {
    return require(__dirname + "/../Farmework/Config/common.js")
};

Util = function (str) {
    var arr = str.split(".");
    var path = "/../Farmework/Util/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(__dirname + path);
};

M = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/../Farmework/Model/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};

var User = M("index.user");
User.scope({
    method: ["page", 4, 10]
}).findAll().then(function (data) {
    console.log(data);
});