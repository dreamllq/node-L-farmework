/**
 * Created by lvlq on 16/7/31.
 */
var express = require("express");
var router = express.Router();
var base64 = Util("Func.base64");
var oauth_mid = require("../mid/wxshare");

router.use("/oauth", oauth_mid);
router.use("/oauth", function (req, res) {
    res.json(req.query);
});

module.exports = router;