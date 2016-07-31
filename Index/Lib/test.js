/**
 * Created by lvlq on 16/7/31.
 */
var express = require("express");
var router = express.Router();
var base64 = Util("Func.base64");

router.use("/oauth", function (req, res, next) {
    var url = req.href;
    if (!req.query.oauth) {
        var redirect = "http://weixin.xfoody.com/weixin/oauth?url=" + base64.encode(url);
        return res.redirect(redirect);
    }
    next();
});

router.use("/oauth", function (req, res) {


    res.json(req.query);
});

module.exports = router;