/**
 * Created by lvliqi on 2016/7/20.
 */
var express = require("express");
var router = express.Router();

router.use("/count", require("./countController"));

module.exports = router;