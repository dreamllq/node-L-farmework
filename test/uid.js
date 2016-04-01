/**
 * Created by lvlq on 16/3/22.
 */

var uid = require('uid-safe').sync;


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

var Uid = M("index.uid");


var add = function () {
    var uuid = uid(24);

    Uid.find({
        where: {
            uid: uuid
        }
    }).then(function (u) {
        if (u) {

        } else {
            Uid.create({
                uid: uuid
            }).then(function () {
                add();
            })
        }
    })
};

Uid.sync().then(function () {
    add();
});