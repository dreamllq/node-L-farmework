/**
 * Created by lvlq on 16/1/15.
 */
var index = function (req, res) {
    res.render("login.html");
};

var login = function (req, res) {
    var userName = req.body.username;
    var passWord = req.body.passwd;

    var adminUser = M("admin.user");

    adminUser.findOne({
        where: {
            userName: userName,
            passWord: passWord
        }
    }).then(function (d) {
        if (!d) {
            throw new Error("登录操作:用户名或密码错误");
        }
        req.session.user = d;
        res.success();
    }).catch(function (e) {
        res.error(1001, "登录失败", e);
    })
};

var logout = function (req, res) {
    req.session.destroy();
    res.success();
};

var regist = function (req, res) {
    var password = "123456";
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex');

    var adminUser = M("admin.user");
    adminUser.create({
        userName: "admin",
        passWord: d
    }).then(function () {
        res.json({
            b: 1
        });
    });
};


module.exports = {
    index: index,
    login: login,
    logout: logout,
    regist: regist
};