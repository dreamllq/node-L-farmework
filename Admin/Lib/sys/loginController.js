/**
 * Created by lvlq on 16/1/15.
 */
var express = require("express");
var router = express.Router();

router.get("/login", function (req, res) {
    res.render("login.html");
});

router.post("/login", function (req, res) {
    var userName = req.body.username;
    var passWord = req.body.passwd;

    var adminUser = Models.admin_user;

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
});

router.post("/logout", function (req, res) {
    req.session.destroy();
    res.success();
});

router.post("/regist", function (req, res) {
    var password = "123456";
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex');

    var adminUser = Models.admin_user;
    adminUser.create({
        userName: "admin",
        passWord: d
    }).then(function () {
        res.json({
            b: 1
        });
    });
});

module.exports = router;