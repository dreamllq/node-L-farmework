/**
 * Created by lvlq on 16/11/16.
 */
var express = require("express");
var router = express.Router();

router.get("/index", function (req, res) {
    res.render("map/index.html");
});

module.exports = router;