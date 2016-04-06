/**
 * Created by lvlq on 16/1/7.
 */
var shareContentMid = require("../mid/sharecontent");
var express = require("express");
var router = express.Router();
var wxshare = require("../mid/wxshare");

router.get("/*", wxshare());
router.get("/*", function (req, res, next) {
    res.locals.title = "123";
    next();
});

router.get("/setsession", function (req, res) {
    req.session.a = {
        b: 3
    };
    res.send("success");
});

router.get("/getsession", function (req, res) {
    res.json({
        id: req.session.id,
        session: req.session
    });
});

module.exports = router;