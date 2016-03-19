/**
 * Created by lvlq on 16/3/19.
 */
var Q = require("q");
module.exports = function () {
    var defer = Q.defer();
    var Menu = M("admin.menu");
    var dbver = M("admin.dbver");
    var sysid;

    Menu.sync({
        force: true
    }).then(function () {
        return Menu.create({
            name: "Dashboard",
            uri: "/admin/index"
        });
    }).then(function () {
        return Menu.create({
            name: "系统设置"
        });
    }).then(function (data) {
        sysid = data.id;
        return Menu.create({
            name: "权限管理",
            uri: "/admin/right/index",
            parentId: sysid
        });
    }).then(function () {
        return Menu.create({
            name: "用户管理",
            uri: "/admin/user/index",
            parentId: sysid
        });
    }).then(function () {
        return dbver.create({
            ver: 3,
            changelog: "初始化后台菜单表"
        });
    }).then(function () {
        defer.resolve();
    }).catch(function (err) {
        defer.reject(err);
    });

    return defer.promise;
};