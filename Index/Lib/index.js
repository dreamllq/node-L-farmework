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

router.get("/index", function (req, res) {
    console.log(req.ip);
    console.log(req.port);
    console.log(req.hostname);
    console.log(req.protocol);
    console.log(req.domain);
    console.log(req.href);
    res.render("index.html");
});

router.get("/test", function (req, res) {
    res.render("test.html");
});

module.exports = router;