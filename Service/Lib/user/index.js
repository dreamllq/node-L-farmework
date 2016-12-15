/**
 * Created by lvlq on 16/11/17.
 */
var express = require("express");
var router = express.Router();

router.use("/regist", require("./regist"));
router.use("/login", require("./login"));
router.use("/getuserinfo", require("./getuserinfo"));

module.exports = router;