/**
 * Created by lvlq on 16/3/31.
 */
var urllib = require("urllib");

urllib.request('http://api.weixinzjit.com/api.php/wx/get_Token', {
    method: "GET",
    dataType: "json"
}, function (err, result) {
    if (err) {
        console.log(new Buffer(err.data));
        console.log(JSON.parse(err.data.trim()));
        return;
    }
    // console.log(JSON.parse(result.toString()));
    console.log(result);
});