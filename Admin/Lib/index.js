/**
 * Created by lvlq on 16/1/7.
 */
var midService = require("./midController");
var loginService = require("./sys/loginController");
var mainService = require("./sys/mainController");
var menuService = require("./sys/menuController");
var rightService = require("./sys/rightController");
var userService = require("./sys/userController");
var personService = require("./sys/personController");

module.exports = function (app) {

    //登录页
    app.get("/login", loginService.index);
    app.post("/login", loginService.login);
    app.post("/logout", loginService.logout);
    app.post("/regist", loginService.regist);

    app.get("*", midService.main);

    //首页
    app.get("/index", mainService.index);

    //菜单管理页
    app.get("/menu/index", menuService.index);
    app.post("/menu/add", menuService.add);
    app.post("/menu/del", menuService.del);
    app.post("/menu/edit", menuService.edit);
    app.post("/menu/get", menuService.get);


    //权限管理页
    app.get("/right/index", rightService.index);
    app.post("/right/add", rightService.add);
    app.post("/right/edit", rightService.edit);
    app.post("/right/del", rightService.del);

    //用户管理页
    app.get("/user/index", userService.index);
    app.post("/user/add", userService.add);
    app.post("/user/edit", userService.edit);
    app.post("/user/del", userService.del);

    app.get("/person/index", personService.index);
    app.post("/person/edit", personService.edit);
    app.get("/person/changepwd", personService.changepwd);
    app.post("/person/changepwd", personService.change);
};