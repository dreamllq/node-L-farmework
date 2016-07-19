/**
 * Created by lvliqi on 2016/7/19.
 */
var express = require("express");
var router = express.Router();
var csv = require("csv");
var iconv = require('iconv-lite');

router.use("/", function (req, res) {
    var csvData = req.body.csv;
    var title = csvData.title;
    var data = csvData.data;
    var name = csvData.name || "导出数据";
    name = encodeURI(name);

    data.unshift(title);
    res.setHeader('Content-disposition', 'attachment; filename=' + name + '.csv');
    res.writeHead(200, {'Content-Type': 'text/csv'});

    csv.stringify(data, function (err, d) {
        var str = iconv.encode(d, 'gb2312');
        res.write(str);
        res.end();
    });
});
module.exports = router;