/**
 * Created by lvliqi on 2016/7/15.
 */
var qiniu = require("qiniu");
var Q = require("q");
qiniu.conf.ACCESS_KEY = C.qiniu.access_key;
qiniu.conf.SECRET_KEY = C.qiniu.secret_key;
qiniu.conf.UP_HOST = C.qiniu.up_host;
var bucket = C.qiniu.bucket;

var uptoken = function (bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
};

module.exports.uploadFile = function (key, localFile) {
    var defer = Q.defer();
    var token = uptoken(bucket, key);

    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(token, key, localFile, extra, function (err, ret) {
        if (!err) {
            var url = C.qiniu.cdn_host + "/" + ret.key;
            defer.resolve(url);
        } else {
            console.log(err);
            defer.reject(err);
        }
    });
    return defer.promise;
};
