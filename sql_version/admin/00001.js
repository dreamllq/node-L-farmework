/**
 * Created by lvlq on 16/3/19.
 */
var Q = require("q");

module.exports = function () {
    var defer = Q.defer();
    var User = M("admin.user");
    var dbver = M("admin.dbver");
    User.sync({
        force: true
    }).then(function () {
        return User.create({
            userName: "admin",
            passWord: "e10adc3949ba59abbe56e057f20f883e"
        })
    }).then(function () {
        return dbver.create({
            ver: 1,
            changelog: "初始化后台用户表"
        })
    }).then(function () {
        defer.resolve();
    }).catch(function (err) {
        defer.reject(err);
    });

    return defer.promise;
};