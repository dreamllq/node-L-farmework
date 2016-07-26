/**
 * 统计获取数据接口
 * Created by lvliqi on 2016/7/20.
 */

var express = require("express");
var router = express.Router();
var Q = require('q');

/**
 * 打点统计
 */
router.get("/dot", function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end();
});


router.use("/getDate", function (req, res) {
    var type_name = req.body.t || req.query.t;
    var limit = req.body.l || req.query.l;
    var begin = req.body.begin || req.query.begin;
    var end = req.body.end || req.query.end;
    var type = req.body.type || req.query.type;

    var model;
    if (type == 'uv') model = Models.admin_uv;
    else model = Models.admin_pv;

    Q.fcall(function () {
        if (limit) {
            return model.getListLimit(type_name, limit);
        } else {
            return model.getList(type_name, begin, end);
        }
    }).then(function (data) {

    })
});


module.exports = router;