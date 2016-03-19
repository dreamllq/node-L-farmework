/**
 * Created by lvlq on 16/1/17.
 */

var index = function (req, res) {
    var adminMenu = M("admin.menu");
    adminMenu.findAll().then(function (data) {
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
        res.render("sys/menu.html", {
            menuT: relat[rootid].button
        });
    }).catch(function (e) {
        res.error(111, "", e);
    });
};

var add = function (req, res) {
    console.log(req.body);
    var name = req.body.name;
    var uri = req.body.uri;
    var parentId = req.body.parentId || 0;
    var groupId = req.body.groupId || 0;
    var icon = req.body.icon || 0;
    var sort = req.body.sort || 0;

    var adminMenu = M("admin.menu");
    adminMenu.create({
        name: name,
        uri: uri,
        icon: icon,
        sort: sort,
        parentId: parentId,
        groupId: groupId
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error(1002, "增加菜单失败", err);
    });
};

var del = function (req, res) {
    var id = req.body.id;

    var adminMenu = M("admin.menu");
    adminMenu.destroy({
        where: {
            id: id
        }
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error(1004, "删除菜单失败", err);
    });
};

var edit = function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var uri = req.body.uri;

    var adminMenu = M("admin.menu");

    adminMenu.update({name: name, uri: uri}, {
        where: {
            id: id
        }
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error(1003, "修改菜单失败", err);
    });
};

var get = function (req, res) {
    var adminMenu = M("admin.menu");

    adminMenu.findAll().then(function (data) {
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
        res.success(relat[rootid].button);
    });
};


module.exports = {
    index: index,
    add: add,
    del: del,
    edit: edit,
    get: get
};