/**
 * Created by lvlq on 16/7/16.
 */
var express = require("express");
var router = express.Router();
var config = require("./uedit.config");
var multiparty = require('multiparty');

router.use("/", function (req, res, next) {
    var action = req.query.action;
    if (action == 'config') {
        return res.json(config);
    }
    next();
});


router.use("/", function (req, res, next) {
    var action = req.query.action;
    if (action == 'uploadimage') {
        var form = new multiparty.Form({
            uploadDir: C.upload.path
        });

        form.on('error', function (err) {
            return res.json({
                state: "未知错误"
            });
        });

        form.parse(req, function (err, fields, files) {
            if (err) {
                return res.json({
                    state: "未知错误"
                });
            }

            var f = files.file[0];

            if (f.size > config.imageMaxSize) {
                return res.json({
                    state: "文件大小超出 upload_max_filesize 限制"
                });
            }

            var originalFilename = f.originalFilename;
            var path = f.path.split("/");
            var name = path[path.length - 1];

            res.json({
                state: "SUCCESS",
                url: req.domainName + C.upload.url_base + "/" + name,
                title: originalFilename,
                original: originalFilename,
                type: "image",
                size: f.size
            });
        });
    } else {
        next();
    }
});

router.use("/", function (req, res, next) {
    res.json('404');
});

module.exports = router;