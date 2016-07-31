/**
 * Created by lvlq on 16/7/31.
 */
module.exports.encode = function (str) {
    var b = new Buffer(str);
    var s = b.toString('base64');
    return s;
};

module.exports.decode = function (base64) {
    var b = new Buffer(base64, 'base64');
    var s = b.toString();
    return s;
};