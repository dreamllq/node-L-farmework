/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();

router.use("/upload", require("./uploadController"));
router.use("/uedit", require("./ueditController"));
router.use("/export", require("./exportController"));

module.exports = router;