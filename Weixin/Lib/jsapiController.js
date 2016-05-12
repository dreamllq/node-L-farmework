/**
 * Created by lvlq on 15/8/20.
 */

var express = require("express");
var router = express.Router();
var api = Util("wx.api");

router.use("/config", function (req, res) {
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
});
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


module.exports = router;