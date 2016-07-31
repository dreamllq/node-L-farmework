/**
 * Created by lvlq on 16/1/21.
 */
var express = require("express");
var router = express.Router();

router.get("/index", function (req, res) {
    var adminUser = Models.admin_user;
    var adminRight = Models.admin_right;
    var renderData = {};

    adminRight.findAll({
        where: {
            createUser: req.session.user.id
        }
    }).then(function (rightlist) {
        renderData.right = rightlist;
        return adminUser.findAll();
    }).then(function (data) {
        var userlist = {};
        var rootid = 0;
        userlist[rootid] = {};
        userlist[rootid].next = [];

        for (var i = 0; i < data.length; i++) {
            data[i].next = [];
            userlist[data[i].id] = data[i];
            if (userlist[data[i].parentId])
                userlist[data[i].parentId].next.push(data[i].id);
        }
        var list = [];
        var doUserList = function (root) {
            for (var i = 0; i < root.next.length; i++) {
                list.push(userlist[root.next[i]]);
                doUserList(userlist[root.next[i]]);
            }
        };
        doUserList(userlist[req.session.user.id]);

        renderData.user = list;
        res.render("sys/user.html", renderData);
    });
});

router.post("/add", function (req, res) {
    var userName = req.body.userName;
    var passWord = req.body.passWord;
    var parentId = req.session.user.id;
    var authId = req.body.authId || req.session.user.authId;
    var email = req.body.email || "";
    var phone = req.body.phone || "";
    var name = req.body.name || "";

    var adminUser = Models.admin_user;
    adminUser.create({
        userName: userName,
        passWord: passWord,
        parentId: parentId,
        authId: authId,
        email: email,
        phone: phone,
        name: name
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error(10021, "用户添加失败", err);
    });
});


router.post("/edit", function (req, res) {
    var id = req.body.id;
    var userName = req.body.userName;
    var passWord = req.body.passWord;
    var authId = req.body.authId || req.session.user.authId;
    var email = req.body.email || "";
    var phone = req.body.phone || "";
    var name = req.body.name || "";

    var adminUser = Models.admin_user;
    var dto = {
        userName: userName,
        authId: authId,
        email: email,
        phone: phone,
        name: name
    };

    if (passWord)
        dto.passWord = passWord;

    adminUser.update(dto, {
        where: {
            id: id
        }
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error("10022", "用户修改失败", err);
    })
});

router.post("/del", function (req, res) {
    var id = req.body.id;

    var adminUser = Models.admin_user;
    adminUser.destroy({
        where: {
            id: id
        }
    }).then(function (data) {
        res.success(data);
    }).catch(function (err) {
        res.error(10023, "用户删除失败", err);
    });
});

module.exports = router;