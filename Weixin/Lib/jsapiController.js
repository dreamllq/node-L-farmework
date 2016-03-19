/**
 * Created by lvlq on 15/8/20.
 */
//var api = require("../../Farmework/Util/wxApi");
var api = Util("wx.api");
var getTicket = function (req, res) {
    api.getTicket(function (err, result) {
        if (!!err) {
            return res.json({success: false, err: err});
        }

        res.json({success: true, result: result});
    });
};

var getLatestTicket = function (req, res) {
    api.getLatestTicket(function (err, ticket) {
        if (!!err) {
            return res.json({success: false, err: err});
        }

        res.json({success: true, ticket: ticket});
    });
};

var getJsConfig = function (req, res) {
    var debug = req.body.debug || req.query.debug;
    var jsApiList = req.body.jsApiList || req.query.jsApiList;
    var url = req.body.url || req.query.url;

    var param = {
        debug: debug,
        jsApiList: jsApiList,
        url: url
    };

    api.getJsConfig(param, function (err, result) {
        if (!!err) {
            return res.json({success: false, err: err});
        }

        res.json({success: true, config: result});
    });
};

var getCardExt = function (req, res) {
    var cardId = req.body.cardId || req.query.cardId;
    var code = req.body.code || req.query.code;
    var openid = req.body.openid || req.query.openid;
    var balance = req.body.balance || req.query.balance;

    var param = {
        card_id: cardId,
        code: code,
        openid: openid,
        balance: balance
    };

    api.getCardExt(param, function (err, result) {
        if (!!err) {
            return res.json({success: false, err: err});
        }

        res.json({success: true, config: result});
    });
};


module.exports = {
    getTicket: getTicket,
    getJsConfig: getJsConfig,
    getCardExt: getCardExt,
    getLatestTicket: getLatestTicket
};