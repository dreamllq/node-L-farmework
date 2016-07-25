/**
 * Created by lvliqi on 2016/7/20.
 */
var express = require("express");
var router = express.Router();
var Sequelize = require("sequelize");
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
    addCount(Pv, type_name).then(function () {
        return UvLog.scope({method: ['get', type_name, uid]}).find();
    }).then(function (data) {
        if (!data) {
            return addCount(Uv, type_name)
        }
    }).then(function () {
        UvLog.create({
            type_name: type_name,
            key: uid
        });
    }).done(function () {
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.end();
    });
});

module.exports = router;

var addCount = function (module, type_name) {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    var today_time = Math.floor(date.getTime() / 1000);
    return module.findOrCreate({
        where: {
            type_name: type_name,
            today_time: today_time
        },
        defaults: {
            type_name: type_name
        }
    }).then(function () {
        return module.update({
            num: Sequelize.literal('`num`+1')
        }, {
            where: {
                type_name: type_name
            }
        })
    });
};