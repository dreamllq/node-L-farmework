/**
 * Created by lvlq on 16/8/7.
 */
var router = require("express").Router();

router.get("/index", function (req, res) {
    res.render("static/index.html");
});
module.exports = router;