/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();

router.get("/index", function (req, res) {
    res.render("test/index.html");
});

module.exports = router;