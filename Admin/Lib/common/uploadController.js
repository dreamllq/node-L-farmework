/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var images = require("images");
var qiniu = Util("Func.qiniu");
var uuid = require("uuid");
var Q = require("q");

router.post("/", function (req, res) {
    var height = req.query.height;
    var width = req.query.width;
    var size = req.query.size;//单位kb
    var goal = req.query.goal;
    if (size) {
        size = parseInt(size) * 1014;
    }

    var form = new multiparty.Form({
        uploadDir: C.upload.path
    });

    form.on('error', function (err) {
        return res.send(JSON.stringify({
            errno: 8001,
            error: "上传失败"
        }));
    });

    form.on('part', function (part) {
        console.log(part);
        if (!part.filename) {
            console.log('got field named ' + part.name);
            part.resume();
        }

        if (part.filename) {
            count++;
            console.log('got file named ' + part.name);
            part.resume();
        }

        part.on('error', function (err) {
            return res.send(JSON.stringify({
                errno: 8001,
                error: "上传失败"
            }));
        });
    });


    form.parse(req, function (err, fields, files) {
        for (var i = 0; i < files.file.length; i++) {
            var f = files.file[i];
            var w_h = images(f.path).size();

            if (width && w_h.width != width) {
                return res.send(JSON.stringify({
                    errno: 8001,
                    error: "尺寸错误"
                }))
            }

            if (height && w_h.height != height) {
                return res.send(JSON.stringify({
                    errno: 8001,
                    error: "尺寸错误"
                }))
            }

            if (size && f.size > size) {
                return res.send(JSON.stringify({
                    errno: 8001,
                    error: "图片过大"
                }));
            }
        }


        var all = get_local_path(files, req.domainName);

        if (goal == 'qiniu') {
            uploadFiles_qiniu(files).then(function (all) {
                res.send(JSON.stringify({
                    errno: 0,
                    all: all
                }));
            }).catch(function (err) {
                return res.send(JSON.stringify({
                    errno: 8001,
                    error: err.message
                }));
            });
        } else {
            res.send(JSON.stringify({
                errno: 0,
                all: all
            }));
        }
    });
});

module.exports = router;

var get_local_path = function (files, domain) {
    var all = [];
    for (var i = 0; i < files.file.length; i++) {
        var f = files.file[i];
        var originalFilename = f.originalFilename;
        var path = f.path.split("/");
        var name = path[path.length - 1];

        all.push({
            originalFilename: originalFilename,
            path: C.upload.url_base + "/" + name,
            url: domain + C.upload.url_base + "/" + name
        });
    }

    return all;
};

//批上传图片七牛
var uploadFiles_qiniu = function (files) {
    var defer = Q.defer();
    var counts = files.file.length;
    var l = 0;
    var all = [];

    for (var i = 0; i < files.file.length; i++) {
        var f = files.file[i];
        var originalFilename = f.originalFilename;
        var path = f.path.split("/");
        var name = path[path.length - 1];
        var hash = uuid.v1();
        (function (n, p) {
            qiniu.uploadFile(hash + '/' + name, p).then(function (url) {
                l++;
                all.push({
                    originalFilename: n,
                    path: url,
                    url: url
                });
                if (l == counts) {
                    defer.resolve(all);
                }
            }).catch(function (err) {
                defer.reject(err);
            })
        })(originalFilename, f.path);
    }

    return defer.promise;
};


