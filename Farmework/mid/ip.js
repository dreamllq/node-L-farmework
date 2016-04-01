/**
 * Created by lvlq on 16/3/29.
 */
module.exports = function (req, res, next) {
    req.ip = req.headers['x-real-ip'];
    next();
};