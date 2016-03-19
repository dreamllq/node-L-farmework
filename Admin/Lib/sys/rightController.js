/**
 * Created by lvlq on 16/1/20.
 */
var index = function (req, res) {
    var adminRight = M("admin.right");

    adminRight.findAll({
        where: {
            createUser: req.session.user.id
        }
    }).then(function (d) {
        res.render("sys/right.html", {
            list: d
        });
    }).catch(function (e) {
        res.error(111, "", e);
    });

};

var add = function (req, res) {
    var name = req.body.name;
    var list = req.body.list;
    var createUser = req.session.user.id;
    var createUserName = req.session.user.name;
    var adminRight = M("admin.right");

    adminRight.create({
        name: name,
        list: JSON.stringify(list),
        createUser: createUser,
        createUserName: createUserName
    }).then(function (d) {
        res.success(d);
    }).catch(function (e) {
        res.error(10011, "权限添加失败", e);
    });

};

var edit = function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var list = req.body.list;
    var adminRight = M("admin.right");
    adminRight.update({
        name: name,
        list: JSON.stringify(list)
    }, {
        where: {
            id: id
        }
    }).then(function (d) {
        res.success(d);
    }).catch(function (e) {
        res.error(10012, "权限编辑失败", e);
    });
};

var del = function (req, res) {
    var id = req.body.id;
    var adminRight = M("admin.right");
    adminRight.destroy({
        where: {
            id: id
        }
    }).then(function (d) {
        res.success(d);
    }).catch(function (e) {
        res.error(10013, "权限删除失败", e);
    });
};


module.exports = {
    index: index,
    add: add,
    edit: edit,
    del: del
};