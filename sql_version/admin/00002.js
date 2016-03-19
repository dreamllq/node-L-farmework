/**
 * Created by lvlq on 16/3/19.
 */
var Q = require("q");

module.exports = function () {
    var defer = Q.defer();
    var Right = M("admin.right");
    var dbver = M("admin.dbver");

    Right.sync({
        force: true
    }).then(function () {
        return dbver.create({
            ver: 2,
            changelog: "初始化后台权限表"
        });
    }).then(function () {
        defer.resolve();
    }).catch(function (err) {
        defer.reject(err)
    });

    return defer.promise;
};