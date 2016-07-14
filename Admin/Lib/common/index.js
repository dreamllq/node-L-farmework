/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();

router.use("/upload", require("./uploadController"));

module.exports = router;