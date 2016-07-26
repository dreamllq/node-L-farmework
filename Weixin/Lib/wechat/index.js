/**
 * Created by lvliqi on 2016/7/26.
 */
var express = require("express");
var router = express.Router();
var wechat = require("wechat");

router.use(express.query());
router.use('/', wechat(C.wx_token, require("./init/check_repeat")));
router.use('/', wechat(C.wx_token, require("./init/userInfo")));
router.use('/', wechat(C.wx_token, wechat
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
router.use('/', wechat(C.wx_token, require("./init/default")));


module.exports = router;
