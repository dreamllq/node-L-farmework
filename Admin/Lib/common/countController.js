/**
 * 统计获取数据接口
 * Created by lvliqi on 2016/7/20.
 */

var express = require("express");
var router = express.Router();

/**
 * 打点统计
 */
router.get("/dot", function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end();
});


router.post("/getDate", function (req, res) {

});


module.exports = router;