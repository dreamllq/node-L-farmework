/**
 * Created by lvlq on 16/1/16.
 */

var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index.html", {});
});


module.exports = router;