/**
 * Created by lvlq on 16/7/31.
 */
var crypto = require('crypto');

module.exports = function (str) {
    var content = str;
    var shasum = crypto.createHash('sha1');
    shasum.update(content);
    var d = shasum.digest('hex');
    return d;
};