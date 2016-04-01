/**
 * Created by lvlq on 16/1/7.
 */
var shareContentMid = require("../mid/sharecontent");
var express = require("express");
var router = express.Router();
router.get("/setsession", function (req, res) {
    req.session.a = {
        b: 3
    };
    res.send("success");
});

router.get("/getsession", function (req, res) {
    res.json({
        session: req.session,
        de: req.browser
    });
});

module.exports = router;