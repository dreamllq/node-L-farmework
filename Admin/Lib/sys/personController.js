/**
 * Created by lvlq on 16/1/24.
 */
var index = function (req, res) {
    res.render("sys/persion.html");
};

var edit = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;

    var adminUser = M("admin.user");
    adminUser.update({
        name: name,
        email: email,
        phone: phone
    }, {
        where: {
            id: req.session.user.id
        }
    }).then(function (d) {
        req.session.user.name = name;
        req.session.user.email = email;
        req.session.phone = phone;

        res.success(d);
    }).catch(function (e) {
        res.error(10031, "个人信息修改失败", e);
    });
};

var changepwd = function (req, res) {
    res.render("sys/changepwd.html");
};

var change = function (req, res) {
    var oldp = req.body.oldp;
    var newp = req.body.newp;

    var adminUser = M("admin.user");

    if (oldp == req.session.user.password) {
        adminUser.update({
            password: newp
        }, {
            where: {
                id: req.session.user.id
            }
        }).then(function (d) {
            req.session.user.password = newp;
            res.success(d);
        }).catch(function () {
            res.error(10033, "密码修改失败", e);
        });

    } else {
        res.error(10032, "密码错误", e);
    }
};


module.exports = {
    index: index,
    edit: edit,
    changepwd: changepwd,
    change: change
};