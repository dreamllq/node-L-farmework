/**
 * Created by lvlq on 16/1/7.
 */

var express = require("express");
var router = express.Router();

var midService = require("./midController");
var loginService = require("./sys/loginController");
var mainService = require("./sys/mainController");
var menuService = require("./sys/menuController");
var rightService = require("./sys/rightController");
var userService = require("./sys/userController");
var personService = require("./sys/personController");


//登录页
router.get("/login", loginService.index);
router.post("/login", loginService.login);
router.post("/logout", loginService.logout);
router.post("/regist", loginService.regist);

router.get("*", midService.main);

//首页
router.get("/index", mainService.index);

//菜单管理页
// router.get("/menu/index", menuService.index);
// router.post("/menu/add", menuService.add);
// router.post("/menu/del", menuService.del);
// router.post("/menu/edit", menuService.edit);
// router.post("/menu/get", menuService.get);

router.use('/menu', require("./sys/menuController"));


//权限管理页
router.get("/right/index", rightService.index);
router.post("/right/add", rightService.add);
router.post("/right/edit", rightService.edit);
router.post("/right/del", rightService.del);

//用户管理页
router.get("/user/index", userService.index);
router.post("/user/add", userService.add);
router.post("/user/edit", userService.edit);
router.post("/user/del", userService.del);

router.get("/person/index", personService.index);
router.post("/person/edit", personService.edit);
router.get("/person/changepwd", personService.changepwd);
router.post("/person/changepwd", personService.change);

var test = require("./test/index");
router.use("/test", test);
router.use("/common", require("./common"));

module.exports = router;