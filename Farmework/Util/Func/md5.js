/**
 * Created by lvlq on 16/7/31.
 */
var crypto = require('crypto');

module.exports = function (str) {
    var content = str;
    var md5 = crypto.createHash('md5');
    md5.update(content);
    var d = md5.digest('hex');
    return d;
};