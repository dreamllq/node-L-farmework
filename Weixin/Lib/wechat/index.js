/**
 * Created by lvliqi on 2016/7/26.
 */
var express = require("express");
var router = express.Router();
var wechat = require("wechat");

router.use(express.query());
router.use('/', wechat('some token', function (req, res, next) {
    console.log(req.weixin);
    next();
}));

router.use('/', wechat('some token', wechat
    .text(require("./text"))
    .image(require("./image"))
    .voice(require("./voice"))
    .video(require("./video"))
    .location(require("./location"))
    .link(require("./link"))
    .event(require("./event"))
    .device_text(require("./device_text"))
    .device_event(require("./device_event"))
    .middlewarify()
));


module.exports = router;
