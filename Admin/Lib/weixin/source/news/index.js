/**
 * Created by lvlq on 16/8/5.
 */
var express = require("express");
var router = express.Router();
var source_type = require("../../enum/source_type");
var source_status = require("../../enum/source_status");

router.get("/index", function (req, res) {
    var returnData = {};
    Models.weixin_source.pageData(req.query.page, {
        type: source_type.NEWS
    }).then(function (data) {
        returnData.list = data.list;
        returnData.page = data.page;
        res.render("weixin/source/news/index.html", returnData);
    }).catch(function (err) {
        console.log(err);
        res.r404();
    })
});

router.get("/add", function (req, res) {
    res.render("weixin/source/news/add.html");
});

module.exports = router;