/**
 * Created by lvlq on 16/1/16.
 * 请求预处理
 */
var _ = require("underscore");

/**
 * 获取管理页面的menu
 * @param req
 * @param res
 * @param next
 */
var main = function (req, res, next) {
    var blackPath = [
        "/login"
    ];
    if (_.indexOf(blackPath, req.path) == -1) {
        if (req.session.menu) {
            res.locals.menu = req.session.menu;
            next();
            return;
        }

        var adminMenu = Models.admin_menu;
        var adminRight = Models.admin_right;

        //获取用户权限
        adminRight.find({
            where: {
                id: req.session.user.authId
            }
        }).then(function (data) {
            if (req.session.user.authId == 0) {
                return adminMenu.findAll();
            }

            //获取menu列表
            return adminMenu.findAll({
                where: {
                    id: JSON.parse(data.list)
                }
            });
        }).then(function (data) {

            //构造菜单
            var relat = {};
            var rootid = 0;
            relat[rootid] = {};
            relat[rootid].next = [];

            for (var i = 0, length = data.length; i < length; i++) {
                data[i].next = [];
                relat[data[i].id] = data[i];
                if (relat[data[i].parentId])
                    relat[data[i].parentId].next.push(data[i].id);
            }

            var doMenuTree = function (root) {
                root.button = [];
                for (var i = 0; i < root.next.length; i++) {
                    root.button.push(relat[root.next[i]]);
                    doMenuTree(root.button[i]);
                }
            };
            doMenuTree(relat[rootid]);
            req.session.menu = relat[rootid].button;
            res.locals.menu = relat[rootid].button;
            next();
        });
    } else {
        next();
    }
};


module.exports = {
    main: main
};