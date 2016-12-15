/**
 * Created by lvlq on 16/8/5.
 */
var express = require("express");
var router = express.Router();

router.use("/source", require("./source"));
router.use("/func", require("./func"));

module.exports = router;