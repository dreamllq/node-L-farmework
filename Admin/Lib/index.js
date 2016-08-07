/**
 * Created by lvlq on 16/1/7.
 */

var express = require("express");
var router = express.Router();

var midService = require("./midController");


router.use("/", require("./sys/loginController"));
router.get("*", midService.main);
router.use("/index", require("./sys/mainController"));
router.use('/menu', require("./sys/menuController"));
router.use("/right", require("./sys/rightController"));
router.use("/user", require("./sys/userController"));
router.use("/person", require("./sys/personController"));
router.use("/test", require("./test"));
router.use("/weixin", require("./weixin"));
router.use("/common", require("./common"));

module.exports = router;