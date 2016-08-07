/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();

router.use("/upload", require("./uploadController"));
router.use("/uploadmedia", require("./uploadMediaController"));
router.use("/uedit", require("./ueditController"));
router.use("/export", require("./exportController"));
router.use("/count", require("./countController"));

module.exports = router;