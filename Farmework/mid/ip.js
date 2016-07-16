/**
 * Created by lvlq on 16/3/29.
 */
module.exports = function (req, res, next) {
    req.ip = req.headers['x-real-ip'];
    var p = req.headers['host'].split(":");
    req.port = p.length == 2 ? p[1] : "";
    req.domainName = req.protocol + "://" + req.hostname + ((req.port && req.port != '') ? (":" + req.port) : "");
    req.href = req.domainName + req.originalUrl;
    next();
};