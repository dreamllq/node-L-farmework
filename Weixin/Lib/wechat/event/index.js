/**
 * Created by lvliqi on 2016/7/26.
 */
var Q = require("q");

module.exports = function (message, req, res, next) {
    // Reply with Event
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'event',
    // Event: 'LOCATION',
    // Latitude: '23.137466',
    // Longitude: '113.352425',
    // Precision: '119.385040',
    // MsgId: '5837397520665436492' }

    Q.fcall(function () {
        switch (message.Event) {
            case 'subscribe':
                return require("./subscribe")(message);
            case 'unsubscribe':
                return require("./unsubscribe")(message);
            case 'SCAN':
                return require("./scan")(message);
            case 'LOCATION':
                return require("./location")(message);
            case 'CLICK':
                return require("./click")(message);
            case 'VIEW':
            default:
                return require("./other")();
                break;
        }
    }).then(function (data) {
        res.reply(data);
    }).catch(function (err) {
        console.error(err);
        next();
    });

};