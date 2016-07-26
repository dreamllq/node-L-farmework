/**
 * Created by lvlq on 16/3/22.
 */
var api = Util("wx.api");

module.exports = function (options) {
    options = options || {};
    var debug = options.debug || false;
    var jsApiList = options.jsApiList || [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ];

    return function (req, res, next) {
        var url = req.protocol + "://" + req.hostname + req.originalUrl;
        var param = {
            debug: debug,
            jsApiList: jsApiList,
            url: url.split("#")[0]
        };


        api.getJsConfig(param, function (err, result) {
            if (!!err) {
                res.locals.wxconfig = {};
            } else {
                res.locals.wxconfig = result;
            }
            next()
        });
    }
};