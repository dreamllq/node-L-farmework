/**
 * Created by lvlq on 16/11/19.
 */
var fs = require('fs');


module.exports = function () {
    var str = fs.readFileSync(__dirname + '/mobile.less', {encoding: 'utf8'});
    str = str.replace(/\/\/.*/g, '')
        .replace(/\;.*/g, '')
        .split('\n');
    var str_arr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] != '') {
            var a = str[i].split(':');
            str_arr.push('"' + a[0] + '":"' + a[1] + '"');
        }
    }

    str = '{' + str_arr.join(',') + '}';
    str = eval("(" + str + ')');
    // console.log(str);
    return str;
};