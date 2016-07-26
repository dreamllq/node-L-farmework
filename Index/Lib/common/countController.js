/**
 * Created by lvliqi on 2016/7/20.
 */
var express = require("express");
var router = express.Router();
/**
 * 打点统计
 */
router.get("/dot", function (req, res) {
    var type_name = req.query.t;
    var uid = req.query.u;
    uid = (uid && uid != '') ? uid : req.ip;
    var UvLog = Models.admin_uvlog;
    var Uv = Models.admin_uv;
    var Pv = Models.admin_pv;
    Pv.addCount(type_name).then(function () {
        return UvLog.get(type_name, uid);
    }).then(function (data) {
        if (!data) {
            return Uv.addCount(type_name)
        }
    }).then(function () {
        return UvLog.addLog(type_name, uid);
    }).done(function () {
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.end();
    });
});

module.exports = router;
