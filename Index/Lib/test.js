/**
 * Created by lvlq on 16/7/31.
 */
var express = require("express");
var router = express.Router();
var base64 = require("base64");

router.use("/oauth", function () {
    var url = req.href;
    if (!res.query.oauth) {
        var redirect = "http://weixin.xfoody.com/weixin/oauth?url=" + base64.encode(url);
        return res.redirect(redirect);
    }

    res.json(req.query);
});

module.exports = router;