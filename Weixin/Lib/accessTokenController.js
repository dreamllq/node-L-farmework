/**
 * Created by lvlq on 16/1/14.
 */

var api = Util("wx.api");
var getAccessToken = function (req, res) {
    api.getLatestToken(function (err, token) {
        res.json({data: token});
    });
};

module.exports = {
    getAccessToken: getAccessToken
};