/**
 * Created by lvliqi on 2016/7/20.
 */
var express = require("express");
var router = express.Router();
/**
 * 打点统计
 */
router.get("/dot", function (req, res) {


    res.redirect("/Public/image/dot.png");
});

module.exports = router;