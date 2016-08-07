/**
 * Created by lvlq on 16/8/5.
 */
var express = require("express");
var router = express.Router();

router.use("/image", require("./image"));
router.use("/news", require("./news"));
router.use("/text", require("./text"));
router.use("/video", require("./video"));
router.use("/voice", require("./voice"));

module.exports = router;