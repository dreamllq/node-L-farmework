/**
 * Created by lvliqi on 2016/7/25.
 */
var redis = require("../Farmework/Util/R/RedisCache");
var client = redis();

client.setAsync("111", JSON.stringify({a: 1})).then(function (res) {
    if (res !== 'OK') throw new Error("failed");
    return client.getAsync("111");
}).then(function (res) {
    return getJSON(res);
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.error(err);
}).done(function () {
    client.quit();
});

var getJSON = function (str) {
    if (!str) return null;

    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
};
//
// client.getAsync("123").then(function (res) {
//     return getJSON(res);
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.error(err);
// }).done(function () {
//     client.quit();
// });

