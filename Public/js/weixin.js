(function ($) {
    /**
     * 微信jsapi认证，初始化
     */
    var weixinJsApi = function (cb) {
        var data = {
            debug: false,
            url: window.location.href.split("#")[0],
            jsApiList: [
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
            ]
        };
        $.ajax({
            url: "/Weixin/jsapi/getJsConfig",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    cb(data.config);
                }
            }
        });
    };

    //$("#choose").on("click", function () {
    //    wx.chooseImage({
    //        count: 1,
    //        sizeType: ['original', 'compressed'],
    //        sourceType: ['album', 'camera'],
    //        success: function (res) {
    //            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //
    //            wx.uploadImage({
    //                localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
    //                isShowProgressTips: 1, // 默认为1，显示进度提示
    //                success: function (res) {
    //                    var serverId = res.serverId; // 返回图片的服务器端ID
    //                    $("#kkk").attr("src", localIds[0]);
    //                    $.post("/api/test", {serverId: serverId}, function () {
    //                    }, "json");
    //                }
    //            });
    //        }
    //    })
    //});


    weixinJsApi(function (config) {
        wx.config({
            debug: config.debug == "true", // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: config.appId, // 必填，公众号的唯一标识
            timestamp: config.timestamp, // 必填，生成签名的时间戳
            nonceStr: config.nonceStr, // 必填，生成签名的随机串
            signature: config.signature,// 必填，签名，见附录1
            jsApiList: config.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready(function () {
            //分享朋友圈
            wx.onMenuShareTimeline({
                title: "", // 分享标题
                link: "", // 分享链接
                imgUrl: "", // 分享图标
                success: function () {
                    alert("分享成功");
                },
                cancel: function () {
                }
            });

            //分享给朋友
            wx.onMenuShareAppMessage({
                title: '', // 分享标题
                desc: "", // 分享描述
                link: "", // 分享链接
                imgUrl: "", // 分享图标
                success: function () {
                    alert("分享成功");
                },
                cancel: function () {
                }
            });
        });

        wx.error(function (res) {

        });
    });
})(Zepto);